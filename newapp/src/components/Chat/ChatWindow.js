// src/components/Chat/ChatWindow.js

import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import { useChat } from '../../hooks/useChat'; // Assuming you have this hook set up

const ChatWindow = ({ chatId }) => {
    const { messages, sendMessage } = useChat(chatId); // Get messages and sendMessage function

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message, index) => (
                    <Message key={index} message={message} /> // Use Message component to display each message
                ))}
            </div>
            <MessageInput sendMessage={sendMessage} /> {/* Input for new messages */}
        </div>
    );
};

export default ChatWindow;