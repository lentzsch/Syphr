import React from 'react';
import './TextBoxes.css';

const OutputBox = () => {
    return (
        <div className="output-box-container">
            <div className="output-box">
                <label htmlFor="enigma-output">Enigma Output</label>
                <textarea
                    className="output-text-area"
                    name="enigma-output"
                    type="text"
                    placeholder="Encrypted/Decrypted message will appear here. 
                                 Press send to deliver encrypted message."
                />
                <button type="submit">Send</button>
            </div>
        </div>
    )
}

export default OutputBox;