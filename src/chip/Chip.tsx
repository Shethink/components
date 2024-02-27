import React, { ReactNode } from "react";
import { Chip as MaterialChip, ChipProps as MaterialChipProps  } from "@mui/material";

export interface ChipProps extends MaterialChipProps {
}

const Chip: React.FC<ChipProps> = ({
  children,
  label,
  onClick,
  onDelete,
  deleteIcon,
...props
}) => {
  return (
    <MaterialChip 
    label={label}
    onClick={onClick}
    onDelete={onDelete}
    deleteIcon={deleteIcon}{...props}>{children}</MaterialChip>
  );
};

export default Chip;
