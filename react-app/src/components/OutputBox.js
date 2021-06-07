import React from 'react';
import './TextBoxes.css';

const OutputBox = () => {
    return (
        <div className="output-box-container">
            <div className="output-box">
                <h2>This will be the output box</h2>
                <button type="submit">Send</button>
            </div>
        </div>
    )
}

export default OutputBox;