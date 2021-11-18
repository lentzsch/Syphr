import React, {useEffect, useRef } from 'react';
import {useSelector } from 'react-redux';
import './MessagesBox.css';

const MessagesBox = () => {
    const messages = useSelector(state => state.conversation.current?.messages); 
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="messages-box-container">
            {messages?.map((message) => (
                <div className="message-container">
                    <div className="sender-code-name">
                        {message.senderCodeName}
                    </div>
                    <div className="message-box">
                        {message.message}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default MessagesBox;