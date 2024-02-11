import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { CheckboxContainer, StyledLabel, StyledCheckbox } from "./styles";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "checked" | "onChange"
> & {
  label?: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: string | undefined
};

const Checkbox = ({ isChecked, onChange, label, color, ...props }: CheckboxProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(e.target.checked);

  return (
    <CheckboxContainer>
      <StyledCheckbox
        color={color}
        type="checkbox"
        name=""
        checked={isChecked}
        onChange={handleCheck}
        id="checkbox-primary"
        {...props}
      />
      <StyledLabel color={color} htmlFor="checkbox-primary">{label}</StyledLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
