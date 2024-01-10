import { alpha, Button as MaterialButton, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "Button";

export const buttonClasses = {
  root: `${PREFIX}-root`,
  text: `${PREFIX}-text`,
  contained: `${PREFIX}-contained`,
  startIcon: `${PREFIX}-startIcon`,
  textDarkBg: `${PREFIX}-textDarkBg`,
  outlinedDarkBg: `${PREFIX}-outlinedDarkBg`,
  opaqueOutlined: `${PREFIX}-opaqueOutlined`,
  opaqueOutlinedDarkBg: `${PREFIX}-opaqueOutlinedDarkBg`,
  containedDarkBg: `${PREFIX}-containedDarkBg`,
  "extra-small": `${PREFIX}-extra-small`,
  small: `${PREFIX}-small`,
  42: `${PREFIX}-42`,
  medium: `${PREFIX}-medium`,
  large: `${PREFIX}-large`,
  "extra-large": `${PREFIX}-extra-large`,
};

export const StyledButton = styled(MaterialButton)(
  ({ theme: { palette, colours } }) => ({
    [`&.${buttonClasses.root}`]: {
      fontSize: ".8rem",
      borderRadius: 3,
      overflowWrap: "anywhere",
      height: "30px",
    },
    [`&.${buttonClasses.text}`]: {
      "&:hover": {
        backgroundColor: alpha(colours.black, 0.05),
      },
    },
    [`&.${buttonClasses.contained}`]: {
      "&.Mui-disabled": {
        backgroundColor: alpha(palette.primary.main, 0.38),
        color: colours.white,
      },
    },
    [`&.${buttonClasses.startIcon}`]: {
      marginLeft: 0,
    },
    // custom classes
    [`&.${buttonClasses.textDarkBg}`]: {
      color: alpha(colours.white, 0.8),
      "&:hover": {
        color: colours.white,
        backgroundColor: alpha(colours.white, 0.1),
        transition: "color 0.35s ease-in-out",
      },
      "&.Mui-disabled": {
        color: alpha(colours.white, 0.38),
      },
    },
    [`&.${buttonClasses.outlinedDarkBg}`]: {
      color: colours.white,
      borderColor: alpha(colours.white, 0.8),
      backgroundColor: alpha(colours.white, 0.1),
      "&:hover": {
        borderColor: colours.white,
        backgroundColor: "transparent",
      },
      "&.Mui-disabled": {
        color: alpha(colours.white, 0.3),
        backgroundColor: alpha(colours.white, 0.2),
        borderColor: alpha(colours.white, 0.3),
      },
    },
    [`&.${buttonClasses.opaqueOutlined}`]: {
      backgroundColor: colours.white,
      position: "relative",
      "&:hover": {
        backgroundColor: colours.white,
        position: "relative",
        "&::after": {
          content: "''",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          // backgroundColor: alpha(colours.focus, 0.04),
        },
      },
      "&.Mui-disabled": {
        backgroundColor: colours.white,
      },
    },
    [`&.${buttonClasses.opaqueOutlinedDarkBg}`]: {
      color: palette.primary.main,
      // borderColor: alpha(colours.interDark, 0.5),
      "&:hover": {
        // borderColor: colours.interDark,
        "&::after": {
          // backgroundColor: alpha(colours.interDark, 0.04),
        },
      },
    },
    [`&.${buttonClasses.containedDarkBg}`]: {
      // backgroundColor: colours.interDark,
      "&:hover": {
        // backgroundColor: colours.focusDark,
      },
      "&.Mui-disabled": {
        // backgroundColor: alpha(colours.interDark, 0.38),
      },
    },
  })
);

export const StyledIconButton = styled(IconButton)(
  // @ts-ignore
  ({ theme: { colours, palette } }) => {
    const iconButtonBuffer = (margin: number | string) => ({
      "&::after": {
        content: "''",
        position: "absolute",
        top: -margin,
        left: -margin,
        bottom: -margin,
        right: -margin,
      },
    });
    return {
      [`&.${buttonClasses.root}`]: {
        borderRadius: 3,
        padding: 0,
        "&:hover": {
          backgroundColor: colours.focus,
        },
        "&.Mui-disabled": {
          backgroundColor: alpha(colours.focus, 0.35),
        },
      },
      [`&.${buttonClasses.contained}`]: {
        backgroundColor: palette.primary.main,
        color: colours.white,
      },
      [`&.${buttonClasses.text}`]: {
        backgroundColor: "none",
        color: "currentColor",
        "&:hover": {
          backgroundColor: alpha(colours.white, 0.05),
        },
      },
      [`&.${buttonClasses.textDarkBg}`]: {
        color: colours.white,
        "&:hover": {
          backgroundColor: alpha(colours.white, 0.1),
        },
      },
      [`&.${buttonClasses["extra-small"]}`]: {
        maxWidth: 24,
        maxHeight: 24,
        ...iconButtonBuffer(12),
      },
      [`&.${buttonClasses.small}`]: {
        maxWidth: 32,
        maxHeight: 32,
        ...iconButtonBuffer(8),
      },
      [`&.${buttonClasses["42"]}`]: {
        width: 42,
        height: 42,
      },
      [`&.${buttonClasses.medium}`]: {
        width: 48,
        height: 48,
      },
      [`&.${buttonClasses.large}`]: {
        width: 60,
        height: 60,
      },
      [`&.${buttonClasses["extra-large"]}`]: {
        width: 64,
        height: 64,
      },
    };
  }
) as unknown as typeof IconButton; // Need to cast so we can use `component` composition property (https://mui.com/material-ui/guides/typescript/#complications-with-the-component-prop)
