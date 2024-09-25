const Chat = require('../models/Chat'); // Import the Chat model
const Message = require('../models/Message'); // Import the Message model
const User = require('../models/User'); // Import the User model

// Create or get a chat
exports.createChat = async (req, res) => {
    const { userId } = req.body; // ID of the user to chat with
    const members = [req.user.id, userId]; // Get the current user ID and the target user ID

    try {
        // Check if the chat already exists
        let chat = await Chat.findOne({ members: { $all: members } });
        if (chat) {
            return res.status(200).json(chat); // Return existing chat
        }

        // Create a new chat
        chat = new Chat({ members });
        await chat.save();

        res.status(201).json(chat); // Return newly created chat
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get all chats for the current user
exports.getUserChats = async (req, res) => {
    try {
        const chats = await Chat.find({ members: req.user.id })
            .populate('members', '-password') // Exclude password from populated user data
            .exec();

        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Send a message in a chat
exports.sendMessage = async (req, res) => {
    const { chatId, message } = req.body;

    try {
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
