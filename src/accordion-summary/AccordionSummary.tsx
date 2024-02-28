import React, { ReactNode } from "react";
import { AccordionSummaryProps as MaterialAccordionSummaryProps  } from "@mui/material";
import { StyledAccordionSummary } from "./styles";

export interface AccordionSummaryProps extends MaterialAccordionSummaryProps {
  expandIcon?:ReactNode
}

const AccordionSummary: React.FC<AccordionSummaryProps> = ({
  children,
  expandIcon,
...props
}) => {
  return (
    <StyledAccordionSummary expandIcon={expandIcon} {...props}>{children}</StyledAccordionSummary>
  );
};

export default AccordionSummary;
