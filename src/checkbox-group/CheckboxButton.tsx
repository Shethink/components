import FormControlLabel from "@mui/material/FormControlLabel";
import MuiCheckbox from "@mui/material/Checkbox";
import React from "react";
import { Root } from "./styles";
import type { CheckboxProps } from "@mui/material/Checkbox";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export type Props = Omit<CheckboxProps, "color"> & {
  option: string;
  color?: string;
  className?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
};

export const RadioButton = ({
  disabled,
  className,
  option,
  sx,
  color,
  ...props
}: Props) => {
  return (
    <Root className={className} sx={sx}>
      <FormControlLabel
        value={option}
        label={option}
        disabled={disabled}
        control={
          <MuiCheckbox
            {...props}
            sx={{
              color: color,
              "&.Mui-checked": {
                color: color,
              },
            }}
          />
        }
      />
    </Root>
  );
};

export default React.memo(RadioButton);
