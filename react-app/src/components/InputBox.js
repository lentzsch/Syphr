import React from 'react';
import './TextBoxes.css';

const InputBox = () => {
    return (
        <div className="input-box-container">
            <div className="input-box">
                <label htmlFor="enigma-input">Enigma Input</label>
                <textarea
                    className="input-text-area"
                    name="enigma-input"
                    type="text"
                    placeholder="Type message to be encrypted/decrypted here."
                    />
                <button type="submit">Encrypt/Decrypt</button>
            </div>
        </div>
    )
}

export default InputBox;