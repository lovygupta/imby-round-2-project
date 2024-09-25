// API Service for Chat 
// src/services/ChatService.js

const API_URL = 'https://backend-54vi7a0ec-lovy-guptas-projects.vercel.app/api/chats'; // Update with your backend URL

const ChatService = {
    fetchChats: async () => {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization':`Bearer  ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch chats');
        }

        return await response.json(); // Return chat data
    },

    createChat: async (chatData) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(chatData),
        });

        if (!response.ok) {
            throw new Error('Failed to create chat');
        }

        return await response.json(); // Return created chat data
    },
};

export default ChatService;