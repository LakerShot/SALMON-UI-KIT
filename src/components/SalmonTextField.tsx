import React from 'react';
import styled from "@emotion/styled";
import {TextField, TextFieldProps} from "@mui/material";

const SalmonTextField = styled((props: TextFieldProps) => (
    <TextField
        {...props}
    />
))((props) => ({
    '& .MuiFilledInput-root': {
        border: props.error ? '1px solid #ff0000' : '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 12,
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            borderColor: 'rgba(215, 215, 215, 1)',
        },
        color: 'rgba(27, 31, 59, 0.8)',
    },
    '& label.Mui-focused': {
        color: 'rgba(27, 31, 59, 0.65)',
    },
    '& label': {
        color: 'rgba(27, 31, 59, 0.65)',
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
    "& input[type=number]": {
        MozAppearance: "textfield",
    },
}));

export default SalmonTextField;