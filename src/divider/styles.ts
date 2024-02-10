import { styled } from "@mui/material/styles";
import Container from "../container";

export const DividerLine = styled(Container)<{ color: string, height: string, width: string }>(({ width, height, color }) => ({
    border: `1px solid ${color}`,
    borderRadius: '5px',
    width: width ?? "100%",
    height: height ?? "1px"
}))