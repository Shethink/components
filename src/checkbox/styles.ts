import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";

export const CheckboxContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledLabel = styled("label")(({ theme }) => ({
  cursor: "pointer",
  display: "flex",

  "&::before": {
    content: '""',
    width: "1rem",
    height: "1rem",
    borderRadius: "3px",
    border: `2px solid ${theme.colours.primary}`,
    transition: ".5s ease",
    marginRight: ".5rem",
  },

  "&:hover": {
    "&::before": {
      transform: "scale(1.05)",
    },
  },
}));

export const StyledCheckbox = styled("input")(({ theme }) => ({
  position: "absolute",
  opacity: 0,
  cursor: "pointer",

  "&:hover + label::before": {
    transform: "scale(1.05)",
    boxShadow: `${alpha(theme.colours.black, 0.24)} 0px 3px 8px`,
  },

  "&:checked + label::before": {
    background: theme.colours.primary,
    content: '"\\002714"',
    display: "flex",
    justifyContent: "center",
    color: theme.colours.white,
    alignItems: "center",
    fontSize: ".6rem",
  },
}));
