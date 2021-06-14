import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentChar } from '../store/enigma';
import './TextBoxes.css';

const OutputBox = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const outputMessage = useSelector(state => state.enigma.outputMessage)
    const currentChar = useSelector(state => state.enigma.currentChar)
    const textareaRef = useRef(null)
    
    let translatedMessage = ''
    const iterateMessage = () => {
        for (let i = 0; i < outputMessage.length; i++) {
            (function (i) {
                setTimeout(async function () {
                    await dispatch(setCurrentChar(outputMessage[i]), []);
                    translatedMessage += outputMessage[i]
                    setMessage(translatedMessage)
                }, 1000 * i);
            })(i);
        }
    }
    
    useEffect(() => {
        iterateMessage(outputMessage)
        dispatch(setCurrentChar(''), [])
    },[outputMessage, translatedMessage])


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
                    onChange={() => setMessage(translatedMessage)}
                    value={message}
                    ref={textareaRef}
                    onFocus={() => textareaRef.current.blur()}
                />
                <button className="enigma-send-button" type="submit">Send</button>
                {/* <button className="enigma-send-button" type="submit" onClick={clearMessage}>Clear</button> */}
            </div>
        </div>
    )
}

export default OutputBox;