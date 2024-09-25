const express = require('express');
const { createChat, getUserChats, sendMessage, getChatMessages } = require('../controllers/chatController');
const { authenticate } = require('../middleware/auth'); // Assuming you have an authentication middleware
const router = express.Router();

// Create or get a chat
router.post('/chat', authenticate, createChat);

// Get all chats for the current user
router.get('/chats', authenticate, getUserChats);

// Send a message
router.post('/messages', authenticate, sendMessage);

// Get messages for a specific chat
router.get('/messages/:chatId', authenticate, getChatMessages);

module.exports = router;
