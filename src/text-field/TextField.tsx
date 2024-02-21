import React, { ChangeEvent, ComponentProps } from "react";
import {
  IconContainer,
  Input,
  StyledLabel,
  TextArea,
  WordCountContainer,
  inputClasses,
  labelClasses,
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
  isMultiline?: boolean;
  isResizable?: boolean;
  isNumericInput?: boolean;
  labelType?: 'normal' | 'bold'
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
  isMultiline,
  isResizable,
  isNumericInput,
  labelType,
  ...props
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (
      isNumericInput &&
      event.target.value &&
      !event.target.value.match("^[0-9]+$")
    ) {
      return;
    }
    onChange && onChange(event.target.value);
  };

  return (
    <>
      {label && (
        <Row style={{ marginBottom: "10px" }}>
          <StyledLabel className={labelType == 'bold' ? classNames(labelClasses.bold) : classNames(labelClasses.normal)}>{label}</StyledLabel>
          {showWordCount && (
            <WordCountContainer>
              {`${value?.toString().length}/${maxLength}`}
            </WordCountContainer>
          )}
        </Row>
      )}
      <div style={{ position: "relative" }}>
        {!isMultiline ? (
          <>
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
            {EndIconAdornment && (
              <IconContainer>{EndIconAdornment}</IconContainer>
            )}
          </>
        ) : (
          <TextArea
            value={value}
            onChange={handleChange}
            className={classNames(
              variant === "outlined" && inputClasses.outlined,
              variant === "contained" && inputClasses.contained
            )}
            placeholder={placeholder ?? "Placeholder"}
            isResizable={isResizable}
          />
        )}
      </div>
    </>
  );
};

export default TextField;
