const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat', // Reference to Chat schema
        required: true,
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User schema
        required: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    readBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Array of users who have read the message
    }],
    delivered: {
        type: Boolean,
        default: false, // Optional, for delivery status
    },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
