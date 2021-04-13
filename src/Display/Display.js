import React from 'react';

import './Display.css';

const display = (props) => {
    return (
        <div className="Display">
            {props.onDisplay}
        </div>
    );
};

export default display;