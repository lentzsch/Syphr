import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactDOM } from 'react';
import './MessagesBox.css'

const MessagesBox = () => {
    // const conversation = useSelector(state => state.conversation);
    const messages = useSelector(state => state.conversation.current?.messages);
    // const dispatch = useDispatch()
    // console.log("MESSAGES IN BOX ------->", messages)
    // const [message, setMessages] = useState[]
    // useEffect(() =>{
    //     dispatch(currentConversation(currentConvo))
    // }, [currentConvo])
    
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
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
    )
}

export default MessagesBox;