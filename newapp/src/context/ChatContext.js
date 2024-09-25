// Chat Context 
// src/context/ChatContext.js

import React, { createContext, useState } from 'react';

export const ChatContext = createContext({ activeChat:null, setActiveChat(){}, messages:[], addMessage(){}, clearMessages(){} });

export const ChatProvider = ({ children }) => {
    const [activeChat, setActiveChat] = useState(null); // Current chat
    const [messages, setMessages] = useState([]); // Messages for the active chat

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const clearMessages = () => {
        setMessages([]);
    };

    return (
        <ChatContext.Provider value={{ activeChat, setActiveChat, messages, addMessage, clearMessages }}>
            {children}
        </ChatContext.Provider>
    );
};