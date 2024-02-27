import React from "react";
import { AccordionProps as MaterialAccordionProps  } from "@mui/material";
import { StyledAccordion } from "./styles";

export interface AccordionProps extends MaterialAccordionProps {
  expanded:boolean;
  onChange?:()=>void
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  expanded,
onChange,
...props
}) => {
  return (
    <StyledAccordion expanded={expanded} onChange={onChange} {...props}>{children}</StyledAccordion>
  );
};

export default Accordion;
