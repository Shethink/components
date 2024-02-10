import React, { ChangeEvent, ComponentProps } from "react";
import {
  IconContainer,
  Input,
  StyledLabel,
  WordCountContainer,
  inputClasses,
} from "./styles";
import classNames from "classnames";
import Row from "../row";

type Variant = "outlined" | "contained";

export type InputProps = Omit<ComponentProps<typeof Input>, "onChange"> & {
  variant: Variant;
  onChange?: (value: string) => void;
  label?: string;
  showWordCount?: boolean;
  maxLength?: number;
  placeholder?: string;
  EndIconAdornment?: React.ReactNode;
  isExtraPadded?: boolean;
  isLargeVariant?: boolean;
};

const TextField: React.FC<InputProps> = ({
  value,
  variant,
  onChange,
  label,
  showWordCount,
  maxLength,
  placeholder,
  EndIconAdornment,
  isExtraPadded,
  isLargeVariant,
  ...props
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => onChange && onChange(event.target.value);

  return (
    <>
      {label && (
        <Row style={{ marginBottom: "10px" }}>
          <StyledLabel>{label}</StyledLabel>
          {showWordCount && (
            <WordCountContainer>
              {`${value?.toString().length}/${maxLength}`}
            </WordCountContainer>
          )}
        </Row>
      )}
      <div style={{ position: "relative" }}>
        <Input
          {...props}
          maxLength={maxLength ?? Infinity}
          value={value}
          placeholder={placeholder ?? "Placeholder"}
          className={classNames(
            variant === "outlined" && inputClasses.outlined,
            variant === "contained" && inputClasses.contained,
            isExtraPadded && inputClasses.extraPadded,
            isLargeVariant && inputClasses.large
          )}
          onChange={handleChange}
        />
        {EndIconAdornment && <IconContainer>{EndIconAdornment}</IconContainer>}
      </div>
    </>
  );
};

export default TextField;
