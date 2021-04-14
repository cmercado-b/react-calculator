import React from 'react';
import './Button.css';

const operator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

const clear = (props) => {
    return (
        <div className={ `Button ${operator(props.children) ? null : "Operator"}` }  
        onClick={ props.cleared }
        >
            {props.children}
        </div>
    );
};

export default clear;