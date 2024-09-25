// API Service for Messages 
// src/services/MessageService.js

const API_URL = 'https://backend-54vi7a0ec-lovy-guptas-projects.vercel.app/api/messages'; // Update with your backend URL

const MessageService = {
    fetchMessages: async (chatId) => {
        const response = await fetch(`${API_URL}/${chatId}`, {
            method: 'GET',
            headers: {
                'Authorization':   `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch messages');
        }

        return await response.json(); // Return messages data
    },

    sendMessage: async (chatId, messageData) => {
        const response = await fetch(`${API_URL}/${chatId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(messageData),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return await response.json(); // Return sent message data
    },
};

export default MessageService;