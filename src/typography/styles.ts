import { styled } from "@mui/material/styles";
import { Typography as MaterialTypography } from "@mui/material";

const PREFIX = "Typography";

export const classes = {
  basicBold: `${PREFIX}-basicBold`,
  default: `${PREFIX}-default`,
  caption: `${PREFIX}-caption`,
  light: `${PREFIX}-light`,
  normal: `${PREFIX}-medium`,
  standardSize: `${PREFIX}-standard-size`,
  standardTopMargin: `${PREFIX}-standard-top-margin`,
};

export const StyledMaterialTypography = styled(MaterialTypography)(
  ({ theme: { colours } }) => ({
    [`&.${classes.basicBold}`]: {
      fontSize: "14px",
      fontWeight: "600",
      color: colours.black200,
    },

    [`&.${classes.default}`]: {
      fontSize: "16px",
      fontWeight: "600",
      color: colours.black200,
    },

    [`&.${classes.caption}`]: {
      fontWeight: "light",
      colour: colours.black400,
      fontSize: "12px",
    },

    [`&.${classes.light}`]: {
      opacity: 0.7,
    },

    [`&.${classes.standardSize}`]: {
      fontSize: "14px",
    },

    [`&.${classes.standardTopMargin}`]: {
      marginTop: "10px",
    },

    [`&.${classes.normal}`]: {
      fontWeight: "500",
    },
  })
);
