import { formControlLabelClasses } from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

export const Root = styled("div")(({ theme }) => ({
  [`& .${formControlLabelClasses.label}`]: {
    [theme.breakpoints.up(1024)]: {
      fontSize: "18px",
    },
    color: theme.colours.charcoal,
    marginTop: "1px",
    wordBreak: "break-word",
    fontSize: "14px",
  },
}));
