import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clearOutputMessage, setCurrentChar } from '../store/enigma';
import { handleMessages } from '../store/conversation';
import { io } from 'socket.io-client';
import './TextBoxes.css';

let socket;

const OutputBox = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const userId = useSelector(state => state.session.user?.id)
    const userCodeName = useSelector(state => state.session.user?.code_name)
    const outputMessage = useSelector(state => state.enigma.outputMessage);
    const conversation = useSelector(state => state.conversation);
    const currentConversation = conversation.current;
    const currentChar = useSelector(state => state.enigma.currentChar)
    const settings = useSelector(state => state.enigma)
    const textareaRef = useRef(null)

    let messages = []
    if (currentConversation) {
        messages = currentConversation.messages
    }

    const outputCopy = outputMessage
    let translatedMessage = ''
    const iterateMessage = () => {
        for (let i = 0; i < outputCopy.length; i++) {
            (function (i) {
                setTimeout(async function () {
                    await dispatch(setCurrentChar(outputCopy[i]), []);
                    translatedMessage += outputCopy[i]
                    setMessage(translatedMessage)
                }, 250 * i);
            })(i);
        }
    }

    useEffect (() => {
        socket = io();
        
        socket.on('message', (outputMessage) => {
            dispatch(handleMessages(currentConversation.messages.push(outputMessage)))
        })
        return (() => {
            socket.disconnect()
        })
    }, [])
    
    useEffect(() => {
        iterateMessage(outputMessage)
        dispatch(setCurrentChar(''), [])
    },[outputMessage, translatedMessage])

    const sendMessage = (e) => {
        e.preventDefault()
        let message = {
            message: outputMessage,
            settings: JSON.stringify(settings),
            conversationId: currentConversation?.id,
            senderId: userId,
            senderCodeName: userCodeName
        }
        socket.emit('message', {
            message: outputMessage,
            settings: JSON.stringify(settings),
            conversationId: currentConversation?.id,
            senderId: userId,
        })
        dispatch(handleMessages(message))
        // dispatch(clearOutputMessage())
        setMessage('')
    }


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
                {userId && <button className="enigma-send-button" type="submit" onClick={sendMessage}>Send</button>}
                {/* <button className="enigma-send-button" type="submit" onClick={clearMessage}>Clear</button> */}
            </div>
        </div>
    )
}

export default OutputBox;