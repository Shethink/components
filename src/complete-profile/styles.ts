import { styled } from "@mui/material/styles";
import Typography from "../typography";
import { Box } from "@mui/material";
import { CancelIcon, CheckCircleIcon } from "../icon";
import { margin, padding, width } from "@mui/system";
import Row from "../row";

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
  "text-field-full": `${PREFIX}-text-field-full`,
  chips: `${PREFIX}-chips`,
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
  [`&.${completeProfileClasses.small}`]: {
    fontSize: "18px",
    fontWeight: "700",
    color: theme.colours.black,
  },
  [`&.${completeProfileClasses.text}`]: {
    fontSize: "14px",
    color: theme.colours.black,
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${completeProfileClasses["text-field-container"]}`]: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  [`&.${completeProfileClasses.chips}`]: {
    margin: "5px",
  },
  [`&.${completeProfileClasses["text-field-full"]}`]: {
    width: "100%",
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
export const StyledRow = styled(Row)(({ theme }) => ({
  alignItems: "flex-start !important",
  paddingTop: "24px",
  gap: "80px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "24px",
  },
}));
