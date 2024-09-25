const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: 'default_profile_pic_url', // Default profile picture URL
    },
    contacts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User schema
    }],
    lastSeen: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
