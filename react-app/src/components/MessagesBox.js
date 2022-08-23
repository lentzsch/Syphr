import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { encryptMessage } from '../store/enigma';
import './MessagesBox.css';

const MessagesBox = () => {
    const dispatch = useDispatch
    const messages = useSelector(state => state.conversation.current?.messages); 
    const messagesEndRef = useRef(null);


    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleTranslate = (message, enigma) => {
        // const outputMessage = useSelector(state => state.enigma.outputMessage);
        console.log("HIIIIIIIIIIIIIII ,", message, enigma)
        dispatch(encryptMessage(message, enigma));

    };

    return (
        <div className="messages-box-container">
            {messages?.map((message) => (
                <div className="message-container">
                    <div className="sender-code-name">
                        {message.senderCodeName}
                    </div>
                    <div className="message-box" onClick={handleTranslate(message.message, message.settings)}>
                        {message.message}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessagesBox;