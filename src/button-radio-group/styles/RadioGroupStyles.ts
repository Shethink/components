import { styled } from "@mui/material/styles";
import TextField from "../../text-field";
import Typography from "../../typography";

export const Container = styled("div")({
  padding: 0,
  display: "flex",
  flexFlow: "column wrap",
  margin: "12px 0",
});

export const Title = styled(Typography)({
  paddingBottom: "18px",
});

export const StyledTextField = styled(TextField)({
  marginTop: "16px",
});
