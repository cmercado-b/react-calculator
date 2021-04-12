import React from 'react';

const button = (props) => {

    const style = {
        display: 'flex',
        height: '70px',
        width: '90px',
        border: '2px outset #ffff00',
        color: '#d0d0d0',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div>
           <p style={style}>TEST</p>
        </div>
    );
};

export default button;