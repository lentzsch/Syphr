import React, { useState } from 'react';
import './TextBoxes.css';

const InputBox = () => {
    const [message, setMessage] = useState('')
    
    const formatMessage = (message) => message.replace(/[^a-zA-Z]/g, '').toUpperCase()
    
    const handleClick = () => {
        setMessage(message => formatMessage(message))
    }

    return (
        <div className="input-box-container">
            <div className="input-box">
                <label htmlFor="enigma-input">Enigma Input</label>
                <textarea
                    className="input-text-area"
                    name="enigma-input"
                    type="text"
                    placeholder="Type message to be encrypted/decrypted here."
                    onChange={({ target: { value } }) => setMessage(value)}
                    value={message}
                    />
                <button className="enigma-encrypt-button" onClick={handleClick}>Encrypt/Decrypt</button>
            </div>
        </div>
    )
}

export default InputBox;