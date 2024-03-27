import { styled } from "@mui/material/styles";
import { alpha, formControlLabelClasses } from "@mui/material";
import Typography from "../typography";
import Row from "src/row";

export const Container = styled("div")({
  padding: 0,
  display: "flex",
  flexFlow: "column wrap",
});
export const OptionsContainer = styled("div")<{ direction?: "row" | "column" }>(
  ({ theme, direction }) => ({
    display: "flex",
    flexDirection: direction || "column",
  })
);

export const Title = styled(Typography)<{ color?: string }>(
  ({ theme, color }) => ({
    paddingBottom: "18px",
    color: color ?? theme.colours.black200,
  })
);

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

export const ItemContainer = styled("div")({
  transition: ".5s ease",
  "&:hover": {
    transform: "scale(1.007)",
  },
});
