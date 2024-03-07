import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomizedCircularProgress } from "./styles";

export type ProgressCircularProps = CircularProgressProps & {
  value: number;
  size: number;
  thickness: number;
  customColor?: string;
  percentTxtClasses?: string | undefined;
};

const ProgressCircular: React.FC<ProgressCircularProps> = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        height: `${props.size}px `,
        width: `${props.size}px `,
      }}
    >
      <CustomizedCircularProgress
        variant="determinate"
        {...props}
        sx={{
          height: `${props.size}px !important`,
          width: `${props.size}px !important`,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // width: "100px",
        }}
      >
        <Typography
          className={props.percentTxtClasses}
          variant="caption"
          component="div"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressCircular;
