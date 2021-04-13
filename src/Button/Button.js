import React from 'react';
import './Button.css';

const operator = val => {
    return !isNaN(val);
};

const button = (props) => {
    return (
        <div className= {`Button ${operator(props.children) ? null : "Operator"}`}>
            {props.children}
        </div>
    );
};

export default button;