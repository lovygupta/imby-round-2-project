// Chat List component 
// src/components/Chat/ChatList.js

import React from 'react';
import { Link } from 'react-router-dom';

const ChatList = ({ chats }) => {
    return (
        <div className="bg-gray-100 p-4">
            <h2 className="text-lg font-bold mb-4">Chats</h2>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.id} className="mb-2">
                        <Link to={`/chat/${chat.id}`} className="block p-2 bg-white rounded hover:bg-gray-200">
                            {chat.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;