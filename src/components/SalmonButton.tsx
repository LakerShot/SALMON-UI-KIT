import * as React from 'react'
import styled from "@emotion/styled";
import {Button, ButtonProps} from "@mui/material";

const SalmonButton = styled((props: ButtonProps) => (
    <Button
        {...props}
    />
))(() => ({
    borderRadius: '12px',
    height: '56px',
    textTransform: 'none',
    boxShadow: 'none',
}));

export default SalmonButton;