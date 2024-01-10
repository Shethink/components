"use strict";

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    targets: {
                      node: "current",
                    },
                  },
                ],
                "@babel/preset-react",
              ],
              env: {
                production: {
                  presets: ["minify"],
                },
                test: {
                  presets: ["@babel/preset-env", "@babel/preset-react"],
                },
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              fallback: "file-loader",
              name: "[name].[ext]",
              outputPath: "fonts/",
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      }),
    ],
  },
};
