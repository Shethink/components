import { styled } from "@mui/material/styles";
import Container from "../container";
import { Container as MuiContainer } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Typography from "../typography";
import SearchIcon from "../icon/search-icon";

export const BoxContainer = styled(Container)<{ isOpen: boolean }>(
    ({ isOpen, theme }) => ({
        border: `1px solid #D8D7E1`,
        borderRadius: isOpen ? "6px 6px 0px 0px" : "6px 6px 6px 6px",
        padding: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    })
);

export const OptionListBox = styled(Container)(() => ({
    padding: "20px",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    userSelect: "none",
    cursor: "pointer",
    maxHeight: "168px",
    overflow: "scroll",
}));

export const DropDownOption = styled(Container)(() => ({
    padding: "0 !important",
    margin: "0",
    border: "1px solid #D7D8E1",
    borderRadius: "0px 0px 6px 6px",
    borderTop: 0,
}));

export const EmptyRadio = styled(Container)(() => ({
    padding: "0 !important",
    margin: "0 5px 0 0",
    border: "1px solid #D7D8E1",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    maxWidth: "fit-Content",
}));

export const CheckCircleIconCustom = styled(CheckCircleIcon)(() => ({
    padding: "0",
    margin: "0 5px 0 0",
    width: "22px",
    height: "22px",
    color: "#02BC7D",
}));

export const OptionItemBox = styled(MuiContainer)(() => ({
    padding: "5px 10px !important",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    maxWidth: "100% !important",
    minWidth: "50% !important",
    width: "50% !important",
}));

export const KeyboardArrowUpIconCustom = styled(KeyboardArrowUpIcon)<{
    isOpen: boolean;
}>(({ isOpen }) =>
    isOpen
        ? {
            color: "#393a69",
            transition: "transform 0.5s ease",
        }
        : {
            color: "#393a69",
            transform: "rotate(180deg)",
            transition: "transform 0.5s ease",
        }
);

export const Text = styled(Typography)(({ theme }) => ({
    fontWeight: "500",
    color: theme.colours.black100
}));

export const LabelBox = styled(MuiContainer)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 !important",
}));

export const SearchIconBox = styled(SearchIcon)(() => ({
    marginRight: "10px",
    padding: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
