import { styled } from "@mui/material/styles";
import Typography from "../typography";

const PREFIX = "Input";

export const inputClasses = {
  outlined: `${PREFIX}-outlined`,
  contained: `${PREFIX}-contained`,
  extraPadded: `${PREFIX}-extra-padded`,
  large: `${PREFIX}-large`,
};

export const StyledLabel = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  color: theme.colours.black,
}));

export const TextArea = styled("textarea")<{ isResizable?: boolean }>(
  ({ theme, isResizable }) => ({
    width: "100%",
    borderRadius: "6px",
    padding: "1rem",
    resize: isResizable ? "both" : "none",

    "&:focus": {
      outline: "none",
    },

    "&::placeholder": {
      color: theme.colours.white800,
    },

    [`&.${inputClasses.outlined}`]: {
      border: `1px solid ${theme.colours.white500}`,
      background: theme.colours.white,
    },

    [`&.${inputClasses.contained}`]: {
      border: `1px solid ${theme.colours.white500}`,
      background: theme.colours.white500,
    },
  })
);

export const Input = styled("input")(({ theme }) => ({
  height: "40px",
  width: "100%",
  borderRadius: "6px",
  paddingLeft: "6px",
  color: theme.colours.black200,

  [`&.${inputClasses.extraPadded}`]: {
    paddingLeft: "18px",
  },

  [`&.${inputClasses.large}`]: {
    height: "50px",
  },

  "&:focus": {
    outline: "none",
  },

  "&::placeholder": {
    color: theme.colours.white800,
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

export const WordCountContainer = styled("div")(({ theme }) => ({
  width: "50px",
  height: "30px",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colours.white,
  color: theme.colours.black,
  fontWeight: "500",
  border: `1px solid ${theme.colours.black800}`,
  marginLeft: "10px",
  fontSize: "12px",
}));

export const IconContainer = styled("div")({
  position: "absolute",
  top: 0,
  right: "10px",
  height: "100%",
  display: "flex",
  alignItems: "center",
});
