import React, { CSSProperties, useState } from "react";
import { Container, } from "@mui/material";
import {
    BoxContainer,
    OptionListBox,
    DropDownOption,
    EmptyRadio,
    StyledCheckCircle,
    OptionItemBox,
    StyledKeyboardArrowUp,
    Text,
    LabelBox,
    SearchIconBox,
    MainContainer,
    StyledCircle,
    EmptyContainer,
    customSelectClasses
} from "./styles";
import Typography from "../typography";
import Divider from "../divider";
import { Chip } from "@mui/material";
import classNames from "classnames";


interface Item {
    id: number;
    name: string;
}
interface Props {
    OptionTextStyle?: CSSProperties,
    labelStyle?: CSSProperties,
    placeholderStyle?: CSSProperties,
    placeholder: string;
    label: string
    option: Item[];
    selectedlist: Item[];
    setselectedList: React.Dispatch<React.SetStateAction<Item[]>>;
    showSearchIcon?: boolean
    isLargeVariant?: boolean,
    isExtraPadded?: boolean
}

const CustomSelect = ({ OptionTextStyle, labelStyle, placeholderStyle, placeholder, label, option, selectedlist, setselectedList, showSearchIcon, isLargeVariant, isExtraPadded }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = (id: number, name: string) => {
        const array = [...selectedlist];
        array.push({ id, name });
        setselectedList(array);
    };
    const handleRemoveItem = (id: number, name: string) => {
        const array = selectedlist.filter((item) => item.id !== id);
        setselectedList(array);
    };
    const handleChips = () => {
        if (isOpen) {
            return (
                <LabelBox>
                    {showSearchIcon ? <SearchIconBox height={24} width={20} /> : <></>}
                    <Text style={placeholderStyle} variant="h6">{placeholder}</Text>
                </LabelBox>
            );
        } else {
            if (selectedlist.length == 0) {
                return (
                    <LabelBox>
                        {showSearchIcon ? <SearchIconBox height={24} width={20} /> : <></>}
                        <Text style={placeholderStyle} variant="h6">{placeholder}</Text>
                    </LabelBox>
                );
            } else
                return selectedlist.map((item: { id: number; name: string }) => {
                    return (
                        <Chip
                            style={{ padding: "10px", margin: "2px" }}
                            label={item.name}
                            onDelete={() => handleRemoveItem(item.id, item.name)}
                        />
                    );
                });
        }
    };

    return (
        <MainContainer>
            <Text style={labelStyle} variant="h6">
                {label}
            </Text>
            <BoxContainer isOpen={isOpen}>
                <EmptyContainer onClick={() => setIsOpen(!isOpen)} className={classNames(
                    isExtraPadded && customSelectClasses.extraPadded,
                    isLargeVariant && customSelectClasses.large
                )}>
                    <Typography>{handleChips()}</Typography>
                    <StyledKeyboardArrowUp isOpen={isOpen} />
                </EmptyContainer>
                {isOpen && (
                    <DropDownOption >
                        {selectedlist.length > 0 && (
                            <OptionListBox>
                                {selectedlist.map((item: { id: number; name: string }) => {
                                    return (
                                        <OptionItemBox
                                            onClick={() => handleRemoveItem(item.id, item.name)}
                                            key={item.id}>
                                            <StyledCheckCircle />
                                            <Text style={OptionTextStyle} variant="h6">
                                                {item.name}
                                            </Text>
                                        </OptionItemBox>
                                    );
                                })}
                            </OptionListBox>
                        )}
                        {selectedlist.length > 0 && (
                            <Container style={{ width: "99%" }}>
                                <Divider color="#D8D7E1" height="100%" width="100%" />
                            </Container>
                        )}
                        <OptionListBox>
                            {option
                                .filter(
                                    (option) => !selectedlist.some((item) => item.id === option.id)
                                )
                                .map((item) => {
                                    return (
                                        <OptionItemBox
                                            onClick={() => handleOnClick(item.id, item.name)}
                                            key={item.id}
                                        >
                                            <StyledCircle />
                                            <Text style={OptionTextStyle} variant="h6">
                                                {item.name}
                                            </Text>
                                        </OptionItemBox>
                                    );
                                })}
                        </OptionListBox>
                    </DropDownOption>
                )}
            </BoxContainer>

        </MainContainer>
    );
};

export default CustomSelect;
