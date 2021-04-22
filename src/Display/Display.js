import React from 'react';

import './Display.css';

const display = (props) => {
    return (
        <div className="Display">
            {props.children}
        </div>
    );
};

export default display;