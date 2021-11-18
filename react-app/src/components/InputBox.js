import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { encryptMessage } from '../store/enigma';
import './TextBoxes.css';

const InputBox = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [isFormatted, setIsFormatted] = useState(false);
    const enigma = useSelector(state => state.enigma);
    
    const formatMessage = (message) => message.replace(/[^a-zA-Z]/g, '').toUpperCase();
    
    const handleClick = () => {
        if (message) {
            setMessage(message => formatMessage(message));
            setIsFormatted(true);
        };
    };

    const handleTranslate = () => {
        dispatch(encryptMessage(message, enigma));
        setIsFormatted(false);
    };

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
                { isFormatted
                ?<button className="enigma-encrypt-button" onClick={handleTranslate}>Encrypt/Decrypt</button>
                :<button className="enigma-encrypt-button" onClick={handleClick}>Format Message</button>
                }
            </div>
        </div>
    );
};

export default InputBox;