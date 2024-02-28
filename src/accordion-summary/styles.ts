import {  AccordionSummary } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "Modal";

export const accordionClasses = {
  root: `${PREFIX}-root`,
  center: `${PREFIX}-center`,
  restricted: `${PREFIX}-restricted`,
  padded: `${PREFIX}-padded`,
  dark: `${PREFIX}-dark`,
};

export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
}));
