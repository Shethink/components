import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadioButton from "@mui/material/Radio";
import React from "react";
import { Root } from "./styles/RadioButtonStyles";
import type { RadioProps } from "@mui/material/Radio";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material";

export type Props = RadioProps & {
  option: string;
  className?: string;
  disabled?: boolean;
  sx: SxProps<Theme> | undefined

};

export const RadioButton = ({
  disabled,
  className,
  option,
  sx,
  ...props
}: Props) => {
  return (
    <Root className={className} data-testid="radio-button">
      <FormControlLabel
        value={option}
        label={option}
        data-testid={`radio-button-${option}-label`}
        disabled={disabled}
        control={
          <MuiRadioButton data-testid={`radio-button-${option}`} {...props} sx={sx} />
        }
      />
    </Root>
  );
};

export default React.memo(RadioButton);
