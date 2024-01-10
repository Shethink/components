import { styled } from "@mui/material/styles";

const PREFIX = "Container";

export const classes = {
  fullWidth: `${PREFIX}-fullWidth`,
};

export const Root = styled("div")(({ theme }) => ({
  /* NOTE: handle iPhone safe area when in landscape mode */
  /*paddingLeft: "env(safe-area-inset-left, 0)",*/
  /*paddingRight: "env(safe-area-inset-right, 0)"*/
  [`&.${classes.fullWidth}`]: {
    width: "100%",
  },
  background: theme.colours.white,
}));
