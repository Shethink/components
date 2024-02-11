import React, { useState } from "react";
import { Container, Icon, TextField } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
    BoxContainer,
    OptionListBox,
    DropDownOption,
    EmptyRadio,
    CheckCircleIconCustom,
    OptionItemBox,
    KeyboardArrowUpIconCustom,
    Text
} from "./styles";
import Typography from "../typography";
import Divider from "../divider";
import { Chip } from "@mui/material";
import SearchIcon from "src/icon/search-icon";

interface Item {
    id: number;
    name: string;
}
interface Props {
    option: Item[];
    selectedlist: Item[];
    setselectedList: React.Dispatch<React.SetStateAction<Item[]>>;
}

const CustomSelect = ({ option, selectedlist, setselectedList }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = (id: number, name: string) => {
        const array = [...selectedlist];
        array.push({ id: id, name: name });
        setselectedList(array);
    };
    const handleRemoveItem = (id: number, name: string) => {
        const array = selectedlist?.filter((item) => item.id !== id);
        setselectedList(array);
    };

    const handleChips = () => {

        if (isOpen) {
            return <Container style={{ display: 'flex', justifyContent: 'center', alignItems: "center", padding: 0 }}>
                <SearchIcon style={{ marginRight: "10px", padding: "0", display: 'flex', justifyContent: 'center', alignItems: "center", }} height={24} width={20} /> <Text fontSize={"20px"} fontWeight={"500"} fontFamily={"sans-serif"} color={"#192023"}>Services</Text></Container>;
        } else {
            if (selectedlist.length == 0) {
                return <Container style={{ display: 'flex', justifyContent: 'center', alignItems: "center", padding: 0 }}>
                    <SearchIcon style={{ marginRight: "10px", padding: "0", display: 'flex', justifyContent: 'center', alignItems: "center", }} height={24} width={20} /> <Text fontSize={"20px"} fontWeight={"500"} fontFamily={"sans-serif"} color={"#192023"}>Services</Text></Container>;
            } else
                return selectedlist?.map((item: { id: number; name: string }) => {
                    return (
                        <Chip
                            style={{ padding: "10px", margin: "2px" }}
                            label={item?.name}
                            onDelete={() => handleRemoveItem(item?.id, item?.name)}
                        />
                    );
                });
        }
    };

    return (
        <Container>
            <Text fontSize={"20px"} fontWeight={"500"} fontFamily={"sans-serif"} color={"#192023"}>Services</Text>
            <BoxContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <Typography>{handleChips()}</Typography>
                <KeyboardArrowUpIconCustom isOpen={isOpen}></KeyboardArrowUpIconCustom>
            </BoxContainer>
            {isOpen && (
                <DropDownOption>
                    {selectedlist?.length > 0 && (
                        <OptionListBox>
                            {selectedlist?.map((item: { id: number; name: string }) => {
                                return (
                                    <OptionItemBox
                                        onClick={() => handleRemoveItem(item?.id, item?.name)}
                                        key={item.id}
                                    >
                                        <CheckCircleIconCustom />{" "}
                                        <Text fontSize={"20px"} fontWeight={"500"} fontFamily={"sans-serif"} color={"#192023"} >{item.name}</Text>
                                    </OptionItemBox>
                                );
                            })}
                        </OptionListBox>
                    )}
                    {selectedlist?.length > 0 && (
                        <Container style={{ width: "99%" }}>
                            <Divider color="#D8D7E1" height="100%" width="100%" />
                        </Container>
                    )}
                    <OptionListBox>
                        {option
                            ?.filter(
                                (option) => !selectedlist.some((item) => item.id === option.id)
                            )
                            ?.map((item) => {
                                return (
                                    <OptionItemBox
                                        onClick={() => handleOnClick(item?.id, item?.name)}
                                        key={item.id}>
                                        <EmptyRadio></EmptyRadio>{" "}
                                        <Text fontSize={"20px"} fontWeight={"500"} fontFamily={"sans-serif"} color={"#192023"} >{item.name}</Text>
                                    </OptionItemBox>
                                );
                            })}
                    </OptionListBox>
                </DropDownOption>
            )
            }
        </Container >
    );
};

export default CustomSelect;
