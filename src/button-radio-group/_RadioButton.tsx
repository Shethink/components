import FormControlLabel from "@mui/material/FormControlLabel";
import MuiRadioButton from "@mui/material/Radio";
import React from "react";
import { Root } from "./styles/RadioButtonStyles";
import type { RadioProps } from "@mui/material/Radio";

export type Props = RadioProps & {
  option: string;
  className?: string;
  disabled?: boolean;
};

export const RadioButton = ({
  disabled,
  className,
  option,
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
          <MuiRadioButton data-testid={`radio-button-${option}`} {...props} />
        }
      />
    </Root>
  );
};

export default React.memo(RadioButton);
