import { styled } from "@mui/material/styles";
import Typography from "../typography";
import { Box } from "@mui/material";
import { CancelIcon, CheckCircleIcon } from "src/icon";
import { margin, padding, width } from "@mui/system";

const PREFIX = "CompleteProfile";

export const completeProfileClasses = {
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
  "text-field-container": `${PREFIX}-text-field-container`,
  chips: `${PREFIX}-chips`

};

export const StyledLabel = styled(Typography)(({ theme }) => ({
  [`&.${completeProfileClasses.medium}`]: {
    fontSize: "35px",
    fontWeight: "700",
    color: theme.colours.black,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },

  },
  [`&.${completeProfileClasses.text}`]: {
    fontSize: "14px",
    color: theme.colours.black,
  }
}));

export const StyledBox = styled(Box)(({ theme }) => ({

  [`&.${completeProfileClasses["text-field-container"]}`]: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    },
  },
  [`&.${completeProfileClasses.chips}`]: {
    margin: '5px'
  },
}));
export const StyledCheckCircle = styled(CheckCircleIcon)(() => ({
  padding: "0",
  margin: "0 5px 0 0",
  width: "32px",
  height: "32px",
  color: "#02BC7D",
}));
export const StyledCheckCross = styled(CancelIcon)(() => ({
  padding: "0",
  margin: "0 5px 0 0",
  width: "32px",
  height: "32px",
  color: "#EF5455",
}));