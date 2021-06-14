import React from 'react';
import { useSelector } from 'react-redux';
import './MessagesBox.css'

const MessagesBox = () => {
    const conversation = useSelector(state => state.conversation);
    const currentConversation = conversation.current;
    return (
        <div className="messages-box-container">
            {currentConversation?.messages.map((message) => (
                <div className="message-container">
                    <div className="sender-code-name">
                        {message.senderCodeName}
                    </div>
                    <div className="message-box">
                        {message.message}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MessagesBox;