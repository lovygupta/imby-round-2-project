const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User schema
        required: true,
    }],
    isGroupChat: {
        type: Boolean,
        default: false,
    },
    groupName: {
        type: String,
        trim: true,
        required: function () { return this.isGroupChat; } // Required if group chat
    },
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);
