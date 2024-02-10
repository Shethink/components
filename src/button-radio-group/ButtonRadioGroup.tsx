import React, { useCallback, useState } from "react";
import RadioButton from "./_RadioButton";
import { Container, StyledTextField, Title } from "./styles/RadioGroupStyles";

export type Option = {
  label: string;
  disabled?: boolean;
  withTextField?: boolean;
  textFieldLabel?: string;
};

type ButtonContainerProps = Option & {
  className?: string;
  selected?: string;
  setSelected: React.Dispatch<React.SetStateAction<string | undefined>>;
  onChange?: (value: string) => void;
  textFieldComponent?: React.ElementType;
};

export type TextFieldOption = {
  name: string;
  textFieldLabel?: string;
  onChange?: (value: string) => void;
  component?: React.ElementType;
};

export type ButtonRadioGroupProps = {
  name: string;
  options: Option[];
  title: React.ReactNode;
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  textFieldComponent?: React.ElementType;
};

const RadioGroupTextField = ({
  name,
  textFieldLabel,
  onChange,
  component: TextFieldComponent = StyledTextField,
}: TextFieldOption) => {
  const handleChange = (value: string) => onChange?.(value);

  return (
    <TextFieldComponent
      fullWidth
      name={name}
      id={textFieldLabel}
      label={textFieldLabel}
      onChange={handleChange}
    />
  );
};

const RadioButtonContainer = ({
  label,
  withTextField,
  textFieldLabel,
  selected,
  setSelected,
  onChange,
  className,
  disabled,
  textFieldComponent,
  ...rest
}: ButtonContainerProps) => {
  const [textFieldValue, setTextFieldValue] = useState<string | undefined>(
    undefined
  );

  const handleTextFieldChange = useCallback(
    (value: string) => {
      setTextFieldValue(value);
      if (value && (label === selected || !selected)) {
        onChange?.(value);
      }
    },
    [onChange, label, selected]
  );

  const handleRadioButtonChange = useCallback(() => {
    setSelected(label);
    if (textFieldValue) {
      onChange?.(textFieldValue);
    } else {
      onChange?.(label);
    }
  }, [label, onChange, setSelected, textFieldValue]);

  return (
    <div>
      <RadioButton
        option={label}
        checked={label === selected}
        onChange={handleRadioButtonChange}
        className={className}
        disabled={disabled}
        {...rest}
      />
      {withTextField && (
        <RadioGroupTextField
          name={`${label}-textfield`}
          textFieldLabel={textFieldLabel}
          onChange={handleTextFieldChange}
          component={textFieldComponent}
        />
      )}
    </div>
  );
};

const ButtonRadioGroup = ({
  name,
  className,
  defaultValue,
  options,
  disabled,
  title,
  onChange,
  textFieldComponent,
}: ButtonRadioGroupProps) => {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <Container className={className}>
      <Title variant="h6" component="label">
        {title}
      </Title>
      {options.map((option) => {
        return (
          <RadioButtonContainer
            key={option.label}
            selected={selected}
            setSelected={setSelected}
            onChange={onChange}
            disabled={disabled}
            textFieldComponent={textFieldComponent}
            {...option}
          />
        );
      })}
    </Container>
  );
};

export default React.memo(ButtonRadioGroup);
