import { styled } from "@mui/material/styles";

const PREFIX = "Input";

export const inputClasses = {
  outlined: `${PREFIX}-outlined`,
  contained: `${PREFIX}-contained`,
};

export const Input = styled("input")(({ theme }) => ({
  height: "35px",
  width: "100%",
  borderRadius: "3px",
  paddingLeft: "6px",
  color: theme.colours.black200,

  "&:focus": {
    outline: "none",
  },

  [`&.${inputClasses.outlined}`]: {
    border: `1px solid ${theme.colours.white500}`,
    background: theme.colours.white,
  },

  [`&.${inputClasses.contained}`]: {
    border: `1px solid ${theme.colours.white500}`,
    background: theme.colours.white500,
  },
}));
