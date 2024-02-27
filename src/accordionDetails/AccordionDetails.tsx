import React, { ReactNode } from "react";
import { AccordionDetailsProps as MaterialAccordionDetailsProps  } from "@mui/material";
import { StyledAccordionDetails } from "./styles";

export interface AccordionDetailsProps extends MaterialAccordionDetailsProps {
}

const AccordionDetails: React.FC<AccordionDetailsProps> = ({
  children,
...props
}) => {
  return (
    <StyledAccordionDetails {...props}>{children}</StyledAccordionDetails>
  );
};

export default AccordionDetails;
