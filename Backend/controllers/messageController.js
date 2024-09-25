const Message = require('../models/Message'); // Import the Message model
const Chat = require('../models/Chat'); // Import the Chat model
const User = require('../models/User'); // Import the User model

// Send a message in a chat
exports.sendMessage = async (req, res) => {
    const { chatId, message } = req.body;

    try {
        // Check if the chat exists
        const chat = await Chat.findById(chatId);
        if (!chat) {
            return res.status(404).json({ message: 'Chat not found' });
        }

        // Create a new message
        const newMessage = new Message({
            chatId,
            senderId: req.user.id,
            message,
        });

        await newMessage.save();
        res.status(201).json(newMessage); // Return the newly created message
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get messages for a specific chat
exports.getChatMessages = async (req, res) => {
    const { chatId } = req.params;

    try {
        const messages = await Message.find({ chatId })
            .populate('senderId', '-password') // Exclude password from sender data
            .exec();

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a message
exports.deleteMessage = async (req, res) => {
    const { messageId } = req.params;

    try {
        // Check if the message exists
        const message = await Message.findById(messageId);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }

        // Check if the user is the sender of the message
        if (message.senderId.toString() !== req.user.id) {
            return res.status(403).json({ message: 'You do not have permission to delete this message' });
        }

        await Message.findByIdAndDelete(messageId);
        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
