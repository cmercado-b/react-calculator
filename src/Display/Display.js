import React from 'react';

const display = (props) => {

    const style = {
        display: 'flex',
        backgroundColor: '#000',
        width: 'auto',
        height: '130px',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: '15px',
        marginTop: '60px',
        marginBottom: '15px',
        color: '#16C60C',
        fontSize: '50px',
        borderRadius: '10px',
        border: '2px solid #cc00ff'
    };

    return (
        <div style={style}>
            test
        </div>
    );
};

export default display;