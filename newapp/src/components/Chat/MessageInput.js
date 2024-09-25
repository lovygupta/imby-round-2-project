// Message Input component 
// src/components/Chat/MessageInput.js

import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            sendMessage(newMessage); // Call the sendMessage function passed as a prop
            setNewMessage(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button type="submit" className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                Send
            </button>
        </form>
    );
};

export default MessageInput;