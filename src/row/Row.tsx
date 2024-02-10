import React from "react";
import { CSSProperties } from "@mui/styles";

const Row = ({
  children,
  style,
  ...props
}: {
  children: React.ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", ...style }} {...props}>
      {children}
    </div>
  );
};

export default Row;
