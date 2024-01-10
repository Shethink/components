import { styled } from "@mui/material/styles";
import { Card as MaterialCard, Typography } from "@mui/material";

const PREFIX = "Card";

export const cardClasses = {
  root: `${PREFIX}-root`,
};

export const Card = styled(MaterialCard)(({ theme: { colours } }) => ({
  [`&.${cardClasses.root}`]: {
    padding: "1.5rem",
    boxShadow: "none",
    border: `1px solid ${colours.black800}`,
    maxWidth: "45%",
    marginBottom: "1.5rem",
    width: "30%",

    "&:hover": {
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
      cursor: "pointer",
    },
  },
}));

export const CreateSequenceCardContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& > p": {
    textAlign: "center",
    fontSize: ".7rem",
  },

  "& > h3": {
    fontSize: "1rem",
    margin: "10px 0",
  },
}));

export const CreateSequenceForm = styled("form")(() => ({
  marginTop: "1rem",
  position: "relative",
}));

export const CreateSequenceFormLabel = styled(Typography)(() => ({
  fontWeight: "600",
  fontSize: 13,
  marginTop: 1,
}));

export const SchedulesContainer = styled("div")(({ theme: { colours } }) => ({
  background: colours.white,
  boxShadow: "0 3px 6px 0 rgba(0,0,0,.09);",
  marginTop: "1.5rem",
  padding: "1rem",
  borderRadius: "6px",
}));

export const CreateSequenceFormButtonsContainer = styled("div")(
  ({ theme: { colours } }) => ({
    border: `1px solid ${colours.white500}`,
    borderRadius: "3px",
    width: "100%",
    marginTop: "3rem",
    background: colours.white,
    padding: "1rem",
  })
);
