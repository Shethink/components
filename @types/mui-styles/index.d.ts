import { ThemeOptions } from "../../src/theme-provider";
import { Theme } from "@mui/material";

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

declare module "@mui/material/styles" {
  interface Theme extends ThemeOptions {}
}
