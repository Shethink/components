import {
  createTheme,
  CssBaseline,
  SimplePaletteColorOptions,
  ThemeOptions as MuiThemeOptions,
  ThemeProvider as MaterialThemeProvider,
  tooltipClasses,
} from "@mui/material";
import React from "react";
import {
  poppinsRegularFont,
  poppinsMediumFont,
  poppinsBoldFont,
} from "./fonts";
import { globalStyles } from "./globalStyles";

export const colours = {
  primary: "#51226f",
  bodyBgBase: "#fff",
  black: "#000000",
  black200: "#1a1a1a",
  black400: "#474747",
  black800: "#e3e3e5",
  blue100: "#d6d7dc",
  blue300: "#858895",
  blue800: "#34384f",
  blue900: "#292d41",
  charcoal: "#3b3b3b",
  cyan100: "#ccecf9",
  cyan200: "#66c5ee",
  cyan300: "#33b2e9",
  cyan400: "#009fe3",
  cyan500: "#51226f",
  cyan600: "#005b8c",
  cyan700: "#004b73",
  slate: "#70706f",
  white: "#ffffff",
  white100: "#f7f7f7",
  white500: "#cacacc",
  white800: "#919191",
  switchhover: "#737373",
};

type PaletteOptions = Omit<
  NonNullable<MuiThemeOptions["palette"]>,
  "primary"
> & {
  primary: Omit<SimplePaletteColorOptions, "dark"> & {
    dark: NonNullable<SimplePaletteColorOptions["dark"]>;
  };
};

export type ThemeOptions = Omit<MuiThemeOptions, "palette"> & {
  palette: PaletteOptions;
  colours: typeof colours & {
    primary: string;
    // Separated out as they by default use common colours
    accent300: string;
    accent: string;
    inter: string;
    interDark: string;
    focus: string;
    focusDark: string;
    // Secondary(action cards colors)
    secondary1: string;
    secondary2: string;
    secondary3: string;
    secondary4: string;
  } & { [key: string]: string };
};

export const getTheme = (
  modifyTheme: (theme: ThemeOptions) => ThemeOptions = (t) => t
) => {
  const getCssOverrides = () => ({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
              ${poppinsRegularFont}
              ${poppinsMediumFont}
              ${poppinsBoldFont}
            `,
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            color: "inherit",
            padding: "16px",
            fontWeight: "bold",
          },
          body: {
            padding: "1rem 16px 0.67rem",
            verticalAlign: "top",
            border: 0,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          popper: {
            zIndex: 9,
            [`.${tooltipClasses.tooltipPlacementBottom}`]: {
              margin: 0,
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h3: {
            "::after": {
              marginTop: "0.75rem",
            },
          },
          h4: {
            "::after": {
              marginTop: "0.5rem",
            },
          },
        },
      },
    },
  });

  const defaultTheme: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 720,
        lg: 1100,
        xl: 1440,
      },
    },
    colours: {
      ...colours,
      primary: colours.primary,
      accent300: colours.cyan400,
      accent: colours.cyan400,
      inter: colours.cyan500,
      interDark: colours.cyan500,
      focus: colours.cyan600,
      focusDark: colours.cyan600,

      // Secondary(action cards colors)
      secondary1: colours.cyan700,
      secondary2: colours.slate,
      secondary3: colours.blue800,
      secondary4: colours.charcoal,
    },
    palette: {
      primary: {
        main: colours.primary,
        dark: colours.primary,
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
      text: {
        primary: colours.charcoal,
      },
    },
    typography: {
      fontFamily: "Poppins",
      h1: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "2.125rem",
        letterSpacing: "-0.2px",
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "1.75rem",
        letterSpacing: "-0.2px",
        lineHeight: 1.2,
      },
      h3: {
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "1.5rem",
        lineHeight: 1.2,
      },
      h4: {
        fontFamily: "Poppins",
        fontWeight: "normal",
        fontSize: "1.35rem",
        lineHeight: 1.2,
      },
      h5: {
        fontFamily: "Poppins",
        fontWeight: "normal",
        fontSize: "1.25rem",
        lineHeight: 1.2,
      },
      h6: {
        fontFamily: "Poppins",
        fontWeight: "lighter",
        fontSize: "1.125rem",
        lineHeight: 1.2,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.4,
      },
      body2: {
        fontSize: "1.125rem",
        lineHeight: 1.4,
      },
      subtitle2: {
        fontSize: ".85rem",
      },
      button: {
        textTransform: "none",
      },
    },
    ...getCssOverrides(),
  };
  return createTheme(modifyTheme(defaultTheme));
};

type Props = {
  children: React.ReactNode;
  modifyTheme?: (theme: ThemeOptions) => ThemeOptions;
};

const ThemeProvider = ({ modifyTheme, children }: Props) => {
  const theme = React.useMemo(() => getTheme(modifyTheme), [modifyTheme]);
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      {children}
    </MaterialThemeProvider>
  );
};

export default ThemeProvider;
