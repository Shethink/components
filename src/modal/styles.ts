import { Modal } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const PREFIX = "Modal";

export const modalClasses = {
  root: `${PREFIX}-root`,
  center: `${PREFIX}-center`,
  restricted: `${PREFIX}-restricted`,
  padded: `${PREFIX}-padded`,
  dark: `${PREFIX}-dark`,
};

export const StyledModal = styled(Modal)(() => ({
  [`&.${modalClasses.center}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const ModalContainer = styled("div")(({ theme: { colours } }) => ({
  minWidth: "45vw",
  maxWidth: "60vw",
  background: alpha(colours.white, 1),
  borderRadius: 6,
  outline: "none",
  padding: "0",
  maxHeight: "80vh",
  overflowY: "auto",
  overflowX: "hidden",

  [`&.${modalClasses.padded}`]: {
    padding: "1rem 2rem",
  },

  [`&.${modalClasses.dark}`]: {
    background: alpha(colours.white100, 1),
  },
}));
