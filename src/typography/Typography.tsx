import React from "react";
import { TypographyProps as MaterialTypographyProps } from "@mui/material";
import classnames from "classnames";
import { classes, StyledMaterialTypography } from "./styles";

export type TypographyProps = Omit<MaterialTypographyProps, "variant"> & {
  variant?: MaterialTypographyProps["variant"] | "basic-bold" | "default";
  lightWeight?: boolean;
  normalWeight?: boolean;
  standardSize?: boolean; // 14px is treated as the standard size
  hasStandardTopMargin?: boolean; // 10px is considered as the standard top margin
};

const getTypographyVariant = (
  variant?: TypographyProps["variant"]
): MaterialTypographyProps["variant"] => {
  if (!variant) {
    return "h6";
  }

  switch (variant) {
    case "basic-bold":
    case "default":
      return "h3";

    default:
      return variant;
  }
};

const Typography = ({
  children,
  className,
  variant,
  normalWeight,
  lightWeight = false,
  standardSize,
  hasStandardTopMargin,
  ...props
}: TypographyProps) => {
  return (
    <StyledMaterialTypography
      variant={getTypographyVariant(variant)}
      className={classnames(
        className,
        variant === "basic-bold" && classes.basicBold,
        variant === "default" && classes.default,
        variant === "caption" && classes.caption,
        standardSize && classes.standardSize,
        lightWeight && classes.light,
        hasStandardTopMargin && classes.standardTopMargin,
        normalWeight && classes.normal
      )}
      {...props}
    >
      {children}
    </StyledMaterialTypography>
  );
};

export default Typography;
