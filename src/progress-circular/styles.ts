import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomizedCircularProgress = styled(CircularProgress)`
  color: ${(props) => {
    const percentage = props.value ?? 0;
    if (percentage >= 60) {
      return "#02BC7D";
    } else if (percentage >= 40) {
      return "#FFC530";
    } else {
      return "#FF5454";
    }
  }};
  & .muicircularprogress-svg : {
    width: 0px !important;
  }
`;
