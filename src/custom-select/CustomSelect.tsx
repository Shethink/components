import React, { useState } from 'react';
import { Container, Icon, TextField, } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BoxContainer, OptionListBox, DropDownOption, EmptyRadio, CheckCircleIconCustom, OptionItemBox, KeyboardArrowUpIconCustom } from './styles';
import Typography from '../typography';
import Divider from '../divider';
import { Chip } from '@mui/material';


interface Item {
    id: number;
    name: string;
}
interface Props {
    option: Item[];
    selectedlist: Item[];
    setselectedList: React.Dispatch<React.SetStateAction<Item[]>>
}

const CustomSelect = ({ option, selectedlist, setselectedList }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = (id: number, name: string) => {
        const array = [...selectedlist];
        array.push({ id: id, name: name })
        setselectedList(array)
    }
    const handleRemoveItem = (id: number, name: string) => {
        const array = selectedlist?.filter((item) => item.id !== id)
        setselectedList(array);
    }

    const handleChips = () => {
        if (isOpen) {
            return "Services"
        } else {
            return selectedlist?.map((item: { id: number, name: string }) => {
                return <Chip style={{ padding: "10px", margin: "2px" }} label={item?.name} onDelete={() => handleRemoveItem(item?.id, item?.name)} />
            })
        }
    }

    return (
        <Container>
            <Typography>{"Select"}</Typography>
            <BoxContainer onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
                <Typography>{handleChips()}</Typography>
                <KeyboardArrowUpIconCustom isOpen={isOpen}></KeyboardArrowUpIconCustom>
            </BoxContainer>
            {isOpen &&
                <DropDownOption >
                    {selectedlist?.length > 0 && <OptionListBox>
                        {selectedlist?.map((item: { id: number, name: string }) => {
                            return <OptionItemBox onClick={() => handleRemoveItem(item?.id, item?.name)} key={item.id}>
                                <CheckCircleIconCustom /> <Typography>{item.name}</Typography>
                            </OptionItemBox>
                        })}
                    </OptionListBox>}
                    {selectedlist?.length > 0 &&
                        <Container style={{ width: '99%' }}><Divider color='#D8D7E1' height='100%' width='100%' /></Container>}
                    <OptionListBox>
                        {option?.filter(option => !selectedlist.some(item => item.id === option.id))?.map((item) => {
                            return <OptionItemBox onClick={() => handleOnClick(item?.id, item?.name)} key={item.id}>
                                <EmptyRadio></EmptyRadio> <Typography>{item.name}</Typography>
                            </OptionItemBox>
                        })}
                    </OptionListBox>
                </DropDownOption>}
        </Container >
    )
}


export default CustomSelect