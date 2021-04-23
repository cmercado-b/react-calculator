import React from 'react';
import './Button.css';

const operator = (val) => {
    return !isNaN(val);
};

const equal = (val) => {
    return val === '=';
};

const button = (props) => {
    return (
        <div className={ `Button ${operator(props.children) ? null : "Operator"} ${equal(props.children) ? "Equal" : null }` } 
            onClick={ () => props.clicked(props.children)}
        >
            {props.children}
        </div>
    );
};

export default button;