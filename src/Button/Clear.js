import React from 'react';
import './Button.css';

const del = val => {
    return val === "C";
};

const clear = (props) => {
    return (
        <div className={ `Button ${del(props.children) ? "Del" : null}` }  
        onClick={ props.cleared }
        >
            {props.children}
        </div>
    );
};

export default clear;