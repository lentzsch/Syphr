import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './TextBoxes.css';

const OutputBox = () => {
    const [message, setMessage] = useState('')
    const outputMessage = useSelector(state => state.enigma.outputMessage)
    const textareaRef = useRef(null)
    
    useEffect(() => {
        setMessage(outputMessage)
    },[outputMessage])

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
                    onChange={() => setMessage(outputMessage)}
                    value={message}
                    ref={textareaRef}
                    onFocus={() => textareaRef.current.blur()}
                />
                <button className="enigma-send-button" type="submit">Send</button>
            </div>
        </div>
    )
}

export default OutputBox;