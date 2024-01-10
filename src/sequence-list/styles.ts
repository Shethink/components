import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const SequencePhaseContainerClassesPrefix = "SequencePhaseContainerClasses";

export const sequencePhaseContainerClasses = {
  margin: `${SequencePhaseContainerClassesPrefix}-marginalised`,
};

export const ListWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  borderRadius: "4px",
  border: `1px solid ${theme.colours.white500}`,
  borderBottom: "none",
}));

export const SequenceItemWrapper = styled("div")(({ theme: { colours } }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "1rem",
  borderBottom: `1px solid ${colours.white500}`,
  transition: ".3s ease",

  "&:hover": {
    background: colours.white100,
  },
}));

export const SequenceBasicDetails = styled("div")(({ theme: { colours } }) => ({
  flex: 1,
  borderRight: `1px dashed ${colours.black800}`,
  paddingLeft: ".5rem",
}));

export const SequenceGeneralData = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: ".3rem",
  fontWeight: "normal",
  fontSize: ".7rem",
}));

export const SequencePhaseContainer = styled("div")(({ theme }) => ({
  width: "3rem",

  [`&.${sequencePhaseContainerClasses.margin}`]: {
    marginRight: "10px",
  },
}));

export const SequqncePhaseTitle = styled(Typography)(
  ({ theme: { colours } }) => ({
    color: colours.white800,
    fontSize: ".6rem",
  })
);

export const SequenceMetrics = styled("section")(({ theme }) => ({
  width: "40%",
  padding: "0 1rem",
  borderRight: `1px dashed ${theme.colours.black800}`,

  [theme.breakpoints.down("lg")]: {
    width: "55%",
  },
}));

export const AdditionalDataContainer = styled("section")(({ theme }) => ({
  width: "25%",
  padding: "0 1rem",
  borderRight: `1px dashed ${theme.colours.black800}`,

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));
