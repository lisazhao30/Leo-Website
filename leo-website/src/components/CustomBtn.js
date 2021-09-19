import React from 'react';
import {Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: "0",
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#4f25f7"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomBtn(props) {
    return (
        <StyledButton variants="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn