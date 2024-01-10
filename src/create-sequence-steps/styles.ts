import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "../typography";

export const StepsHeader = styled("div")(({ theme: { colours } }) => ({
  background: colours.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
  padding: "1rem",
}));

export const Title = styled(Typography)(({ theme: { colours } }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  color: colours.black200,
}));

export const StepsBody = styled("div")({
  padding: "0 1rem",
  margin: "1rem 0",
});

export const OptionsContainer = styled("div")({
  overflowY: "auto",
  marginTop: "1rem",
  overflowX: "hidden",
});

export const StepCard = styled(Card)<{
  onClick?: () => void;
  showcategory?: boolean;
}>(({ showcategory }) => ({
  marginBottom: "14px",
  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.09);",
  borderRadius: "4px",
  padding: "1rem",
  cursor: showcategory ? "pointer" : "default",
  transition: ".3s ease",

  "&:hover": {
    transform: showcategory ? "scale(1.02)" : "none",
  },
}));

export const AITagContainer = styled("div")(({ theme: { colours } }) => ({
  background: colours.blue100,
  marginLeft: ".7rem",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  color: colours.blue500,
  padding: ".2rem .8rem",
}));

export const AITag = styled(Typography)(({ theme: { colours } }) => ({
  marginLeft: 5,
  color: `${colours.blue500} !important`,
  fontSize: "12px !important",
}));
