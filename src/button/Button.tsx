 import {
  ButtonProps as MuiButtonProps,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import classnames from "classnames";
import React from "react";
import { buttonClasses, StyledButton, StyledIconButton } from "./styles";

type Variant = "text" | "outlined" | "contained" | "opaqueOutlined";

export type IconButtonProps = Omit<MuiIconButtonProps, "action"> & {
  isIconButton: true;
  accessibilityLabel: string;
  hasDarkBackground?: boolean;
  variant?: Variant;
  size?: "extra-small" | "small" | 42 | "medium" | "large" | "extra-large";
  component?: undefined;
  isBlackButton?: boolean

};

export type ButtonProps = Omit<MuiButtonProps, "action"> & {
  isIconButton?: false;
  accessibilityLabel?: string;
  hasDarkBackground?: boolean;
  variant?: Variant;
  component?: React.ElementType;
  isBlackButton?: boolean
};

const Button = ({
  children,
  classes,
  variant = "contained",
  hasDarkBackground,
  isIconButton,
  accessibilityLabel,
  size,
  disabled,
  component = "button",
  isBlackButton,
  ...rest
}: ButtonProps | IconButtonProps) => {
  const buttonVariant = variant === "opaqueOutlined" ? "outlined" : variant;

  return isIconButton ? (
    <StyledIconButton
      classes={{
        root: classnames(
          buttonClasses.root,
          "iconButton",
          buttonClasses[size || "medium"],
          buttonVariant !== "outlined" && buttonClasses[`${buttonVariant}`],
          variant === "text" && hasDarkBackground && [buttonClasses.textDarkBg]
        ),
      }}
      aria-label={accessibilityLabel}
      component={component}
      disabled={disabled}
      {...rest}
      size="large"
    >
      {children}
    </StyledIconButton>
  ) : (
    <StyledButton
      variant={buttonVariant}
      size={size}
      component={component}
      disabled={disabled}
      {...(rest as ButtonProps)}
      classes={{
        ...classes,
        root: classnames(buttonClasses.root, classes?.root, isBlackButton && [buttonClasses.black]
        ),
        text: classnames(
          buttonClasses.text,
          classes?.text,
          hasDarkBackground && [buttonClasses.textDarkBg]
        ),
        contained: classnames(
          buttonClasses.contained,
          classes?.contained,
          hasDarkBackground && [buttonClasses.containedDarkBg]
        ),
        startIcon: classnames(buttonClasses.startIcon, classes?.startIcon),
        outlined: classnames(
          classes?.outlined,
          variant === "opaqueOutlined" && [buttonClasses.opaqueOutlined],
          hasDarkBackground &&
          variant !== "opaqueOutlined" && [buttonClasses.outlinedDarkBg],
          variant === "opaqueOutlined" &&
          hasDarkBackground && [buttonClasses.opaqueOutlinedDarkBg],
        ),
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
