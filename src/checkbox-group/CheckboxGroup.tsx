import React, { ChangeEvent, useState } from "react";
import { Container, Title, ItemContainer, OptionsContainer } from "./styles";
import { Variant } from "@mui/material/styles/createTypography";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import CheckboxButton from "./CheckboxButton";

export type CheckboxOption = {
  label: string;
  disabled?: boolean;
};

export type CheckboxGroupProps = {
  options: CheckboxOption[];
  title?: string;
  defaultChecked?: string[];
  color?: string;
  titleVariant?: "default" | "inherit" | Variant | "basic-bold" | undefined;
  sx?: SxProps<Theme> | undefined;
  placeholderColor?: string;
  onChange?: (checked: string[]) => void;
  direction?: "row" | "column";
};

type CheckboxContainerProps = CheckboxOption & {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  color?: string;
  className?: string;
  sx?: SxProps<Theme>;
  onChange?: (value: string[]) => void;
};

const CheckboxContainer = ({
  label,
  disabled,
  selected,
  className,
  sx,
  color,
  onChange,
  setSelected,
}: CheckboxContainerProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { defaultValue },
    } = e;

    if (selected.includes(defaultValue)) {
      const newValues = [...selected].filter((val) => val !== defaultValue);
      setSelected(newValues);
      onChange && onChange(newValues);
    } else {
      const newValues = [...selected, defaultValue];
      setSelected(newValues);
      onChange && onChange(newValues);
    }
  };

  return (
    <ItemContainer>
      <CheckboxButton
        option={label}
        checked={selected?.includes(label)}
        onChange={handleChange}
        className={className}
        disabled={disabled}
        sx={sx}
        color={color}
      />
    </ItemContainer>
  );
};

const CheckboxGroup = ({
  options,
  title,
  color,
  titleVariant,
  defaultChecked = [],
  sx,
  placeholderColor,
  direction,
  onChange,
}: CheckboxGroupProps) => {
  const [selected, setSelected] = useState<string[]>(defaultChecked);

  return (
    <Container>
      {title && (
        <Title
          color={placeholderColor}
          variant={titleVariant ?? "h6"}
          component="label"
        >
          {title}
        </Title>
      )}
      <OptionsContainer direction={direction}>
        {options.map((option) => {
          return (
            <CheckboxContainer
              selected={selected}
              setSelected={setSelected}
              onChange={onChange}
              sx={sx}
              color={color}
              {...option}
            />
          );
        })}
      </OptionsContainer>
    </Container>
  );
};

export default React.memo(CheckboxGroup);
