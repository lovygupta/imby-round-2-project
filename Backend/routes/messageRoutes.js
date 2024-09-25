const express = require('express');
const { sendMessage, getChatMessages, deleteMessage } = require('../controllers/messageController');
const { authenticate } = require('../middleware/auth'); // Ensure this middleware is applied for authentication
const router = express.Router();

// Send a message
router.post('/messages', authenticate, sendMessage);

// Get messages for a specific chat
router.get('/messages/:chatId', authenticate, getChatMessages);

// Delete a message
router.delete('/messages/:messageId', authenticate, deleteMessage);

module.exports = router;
