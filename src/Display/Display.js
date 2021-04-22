import React from 'react';

import './Display.css';

const display = (props) => {
    return (
        <div className="Display" aria-setsize={ props.limited }>
            {props.children}
        </div>
    );
};

export default display;