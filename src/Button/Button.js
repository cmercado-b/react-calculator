import React from 'react';
import './Button.css';

const operator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

const button = (props) => {
    return (
        <div className={ `Button ${operator(props.children) ? null : "Operator"}` } 
        onClick={ () => props.clicked(props.children) }
        >
            {props.children}
        </div>
    );
};

export default button;