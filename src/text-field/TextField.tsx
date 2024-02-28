import React, { ChangeEvent } from "react";
import { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import {
  StyledLabel,
  StyledTextField,
  TextArea,
  WordCountContainer,
  inputClasses,
  labelClasses,
} from "./styles";
import classnames from "classnames";
import Row from "../row";
import { Error } from "../icon";

type AdornmentProps =
  | {
      rightAdornment?: undefined;
      leftAdornment?: React.ReactNode;
    }
  | {
      rightAdornment?: React.ReactNode;
      leftAdornment?: undefined;
    };

export type InputProps = Omit<
  TextFieldProps,
  "onChange" | "helperText" | "variant"
> & {
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
  labelType?: "normal" | "bold";
  helperText?: string;
  errorText?: string;
  variant?: "outlined" | "hybrid";
  isRequired?: boolean;
} & AdornmentProps;

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
  error,
  leftAdornment,
  rightAdornment,
  InputProps,
  inputProps,
  className,
  name,
  id,
  isRequired,
  errorText,
  helperText,
  ...props
}) => {
  const hasAdornment = error || leftAdornment || rightAdornment;
  const InputPropsWithAdornment = hasAdornment
    ? {
        endAdornment: (
          <InputAdornment position="end">
            {error ? (
              <Error style={{ color: "red" }} className={inputClasses.error} />
            ) : null}
            {leftAdornment}
            {!error ? rightAdornment : null}
          </InputAdornment>
        ),
        ...InputProps,
      }
    : InputProps;

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    console.log(!event.target.value.match("^[0-9]+$"));
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
      {(label || showWordCount) && (
        <Row style={{ marginBottom: "10px" }}>
          {label && (
            <StyledLabel
              className={
                labelType == "bold"
                  ? classnames(labelClasses.bold)
                  : classnames(labelClasses.normal)
              }
            >
              {label}
            </StyledLabel>
          )}
          {showWordCount && (
            <WordCountContainer>
              {`${value?.toString().length}/${
                maxLength
                  ? maxLength
                  : inputProps?.maxLength
                  ? inputProps.maxLength
                  : 0
              }`}
            </WordCountContainer>
          )}
        </Row>
      )}
      <div style={{ position: "relative" }}>
        {!isMultiline ? (
          <>
            <StyledTextField
              {...props}
              required={isRequired}
              helperText={error ? errorText : helperText}
              id={id}
              error={error}
              onChange={handleChange}
              value={value}
              variant={variant === "hybrid" ? "filled" : "outlined"}
              className={classnames(
                leftAdornment && inputClasses.leftAdornment,
                error && inputClasses.textFieldError,
                className
              )}
              InputProps={InputPropsWithAdornment}
              inputProps={{
                ...inputProps,
              }}
              name={name}
              placeholder={placeholder ?? "Placeholder"}
            />

            {/* <Input
              {...props}
              maxLength={maxLength ?? Infinity}
              // value={value}
              placeholder={placeholder ?? "Placeholder"}
              className={classnames(
                variant === "outlined" && inputClasses.outlined,
                // variant === "contained" && inputClasses.contained,
                isExtraPadded && inputClasses.extraPadded,
                isLargeVariant && inputClasses.large
              )}
              onChange={handleChange}
            />
            {EndIconAdornment && (
              <IconContainer>{EndIconAdornment}</IconContainer>
            )} */}
          </>
        ) : (
          <TextArea
            value={value as string}
            onChange={handleChange}
            className={classnames(inputClasses.outlined)}
            placeholder={placeholder ?? "Placeholder"}
            isResizable={isResizable}
            maxLength={maxLength ?? Infinity}
          />
        )}
      </div>
    </>
  );
};

export default TextField;
