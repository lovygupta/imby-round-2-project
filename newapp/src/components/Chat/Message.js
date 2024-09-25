// Message component 
// src/components/Chat/Message.js

import React from 'react';

const Message = ({ message }) => {
    return (
        <div className={`mb-2 ${message.isSender ? 'text-right' : 'text-left'}`}>
            <div className={`p-2 rounded-lg ${message.isSender ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}>
                <span className="font-bold">{message.senderName}: </span>
                {message.text}
            </div>
        </div>
    );
};

export default Message;