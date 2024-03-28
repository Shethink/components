import React from "react";
import { alpha } from "@mui/system";
import ReactSelect, {
  ActionMeta,
  GroupBase,
  MultiValue,
  OptionProps,
  SingleValue,
  components as SelectComponent,
  StylesConfig,
} from "react-select";
import makeAnimated from "react-select/animated";
import { SelectComponents } from "react-select/dist/declarations/src/components";
import { colours } from "../theme-provider";

export type SelectOption = {
  label: string;
  value: string;
};

export interface SelectProps {
  options?: readonly SelectOption[];
  onChange?: (
    value: SingleValue<SelectOption> | MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => void;
  isMultiple?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  isDisabled?: boolean;
  isAnimated?: boolean;
  optionComponent?: SelectComponents<
    SelectOption,
    boolean,
    GroupBase<SelectOption>
  >;
  styles?: StylesConfig<SelectOption, boolean, GroupBase<SelectOption>>;
  isInsideModal?: boolean;
  optionsContainCheckbox?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  isMultiple,
  isClearable,
  placeholder,
  closeMenuOnSelect,
  isDisabled,
  isAnimated,
  optionComponent,
  styles,
  isInsideModal,
  optionsContainCheckbox,
  onChange,
}) => {
  const animatedComponents = makeAnimated();

  const Option: React.FC<OptionProps<SelectOption>> = (props) => {
    return (
      <div>
        <SelectComponent.Option {...props}>
          {optionsContainCheckbox && (
            <input
              type="checkbox"
              checked={props.isSelected}
              onChange={() => null}
            />
          )}
          <label>{props.label}</label>
        </SelectComponent.Option>
      </div>
    );
  };

  return (
    <ReactSelect
      defaultValue={options?.[0]}
      options={options ?? []}
      isMulti={isMultiple}
      onChange={onChange}
      menuPortalTarget={
        typeof document !== "undefined"
          ? isInsideModal
            ? (document.querySelector(".MuiModal-root") as HTMLElement)
            : document.body
          : null
      }
      isClearable={isClearable}
      placeholder={placeholder ?? "Select..."}
      closeMenuOnSelect={closeMenuOnSelect}
      isDisabled={isDisabled}
      components={
        isMultiple
          ? isAnimated
            ? optionComponent ?? animatedComponents
            : { Option }
          : { Option }
      }
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          fontSize: "13px",
        }),
        option: (baseStyles, state) => ({
          transition: ".3s ease",
          borderRadius: "8px",
          padding: "6px 12px",
          cursor: "pointer",
          fontSize: "14px",
          marginBottom: "5px",
          "&: hover": {
            background: alpha(colours.primary, 0.08),
          },
        }),
        menuList: () => ({
          padding: ".5rem",
        }),
        ...styles,
      }}
    />
  );
};

export default Select;
