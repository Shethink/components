"use strict";

const path = require("path");
const fs = require("fs");
const webpackConfig = require("./webpack.config.cjs");

module.exports = {
  title: "Sourcebae workbench",
  ignore: ["**/__tests__/**", "**/node_modules/**"],
  exampleMode: "expand",
  defaultExample: true,
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "./src/theme-provider"),
  },
  pagePerSection: true,
  sections: fs
    .readdirSync("src")
    .filter(
      (path) =>
        fs.lstatSync(`src/${path}`).isDirectory() &&
        !path.startsWith(".") &&
        path !== "__tests__" &&
        fs.existsSync(`src/${path}/README.md`)
    )
    .map((dir) => {
      const name = dir
        .split("-")
        .map((part) => {
          if (part === "cta" || part === "nba") {
            return part.toUpperCase();
          }
          return `${part.charAt(0).toUpperCase()}${part.slice(1)}`;
        })
        .join("");
      return {
        name: name,
        content: `src/${dir}/README.md`,
        components: `src/${dir}/${name}.tsx`,
      };
    }),

  getComponentPathLine: (componentPath) => {
    const componentName = path.basename(componentPath, ".tsx");

    // NOTE: this is displayed under the component name
    return `import { ${componentName} } from "@shethink/components";`;
  },

  getExampleFilename: (componentPath) => {
    const specificComponentExampleFile = path
      .join(path.dirname(componentPath), "./README.md")
      .replace();

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    if (fs.existsSync(specificComponentExampleFile)) {
      return specificComponentExampleFile;
    }

    const exampleFile = path.join(componentPath, "../../README.md");

    if (fs.existsSync(exampleFile)) {
      return exampleFile;
    }

    return null;
  },

  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
  ).parse,

  webpackConfig,

  styles: () => ({
    Playground: {
      preview: {
        // this is the 'MD' breakpoint in the theme
        [`@media (max-width: 720px)`]: {
          overflowX: "hidden",
        },
      },
    },
  }),
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: "Poppins",
    },
  },
};
