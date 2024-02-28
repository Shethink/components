import { styled } from "@mui/material/styles";
import MaterialTextField from "@mui/material/TextField";
import Typography from "../typography";
import {
  formLabelClasses,
  inputAdornmentClasses,
  inputBaseClasses,
  inputLabelClasses,
} from "@mui/material";

const PREFIX = "Input";

export const inputClasses = {
  outlined: `${PREFIX}-outlined`,
  contained: `${PREFIX}-contained`,
  extraPadded: `${PREFIX}-extra-padded`,
  large: `${PREFIX}-large`,

  leftAdornment: `${PREFIX}-leftAdornment`,
  textFieldError: `${PREFIX}-textFieldError`,
  error: `${PREFIX}-error`,
};

export const labelClasses = {
  normal: `${PREFIX}-normal`,
  bold: `${PREFIX}-bold`,
};
export const StyledLabel = styled(Typography)(({ theme }) => ({
  [`&.${labelClasses.bold}`]: {
    fontSize: "14px",
    fontWeight: "500",
    color: theme.colours.black,
  },
  [`&.${labelClasses.normal}`]: {
    fontSize: "14px",
    color: theme.colours.black,
  },
}));

export const TextArea = styled("textarea")<{ isResizable?: boolean }>(
  ({ theme, isResizable }) => ({
    width: "100%",
    borderRadius: "6px",
    padding: "1rem",
    resize: isResizable ? "both" : "none",

    "&:focus": {
      outline: "none",
    },

    "&::placeholder": {
      color: theme.colours.white800,
    },

    [`&.${inputClasses.outlined}`]: {
      border: `1px solid ${theme.colours.white500}`,
      background: theme.colours.white,
    },

    [`&.${inputClasses.contained}`]: {
      border: `1px solid ${theme.colours.white500}`,
      background: theme.colours.white500,
    },
  })
);

export const WordCountContainer = styled("div")(({ theme }) => ({
  width: "50px",
  height: "30px",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.colours.white,
  color: theme.colours.black,
  fontWeight: "500",
  border: `1px solid ${theme.colours.black800}`,
  marginLeft: "10px",
  fontSize: "12px",
}));

export const StyledTextField = styled(MaterialTextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "inherit",
    },
    "&.Mui-focused fieldset": {
      borderColor: "none",
      borderWidth: "1px",
    },
  },

  [`.${inputBaseClasses.input}`]: {
    // height: "15px",
    color: theme.colours.black200,
  },

  [`&.${inputClasses.error}`]: {
    position: "absolute",
    right: "10px",
  },

  [`&.${inputClasses.leftAdornment}`]: {
    [`.${inputLabelClasses.root}.${inputLabelClasses.shrink} ~ .${inputBaseClasses.root} > .${inputAdornmentClasses.filled}:not(.${inputAdornmentClasses.hiddenLabel})`]:
      {
        marginTop: "16px",
        transition: "all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
      },
    [`.${inputLabelClasses.root}:not(.${inputLabelClasses.shrink})`]: {
      marginLeft: "34px",
    },
    [`.${formLabelClasses.root}.${inputLabelClasses.root}`]: {
      transition:
        "all 200ms cubic-bezier(0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    },
    [`.${inputBaseClasses.root}.${inputBaseClasses.formControl}.${inputBaseClasses.adornedEnd}`]:
      {
        flexDirection: "row-reverse",
        paddingLeft: "8px",
        [`.${inputBaseClasses.input}`]: {
          paddingLeft: "10px",
        },
        [`.${inputAdornmentClasses.root}`]: {
          marginRight: 0,
        },
      },
  },
}));
