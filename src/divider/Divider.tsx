import React from 'react';
import { Container } from '@mui/material';
import { DividerLine } from './styles';

interface Props {
    color: string,
    width: string,
    height: string
}


const Divider = ({ color, width, height }: Props) => {
    return <DividerLine color={color} height={height} width={width} />
}

export default Divider;