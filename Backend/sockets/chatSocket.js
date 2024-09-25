const socketIO = require('socket.io');
const Message = require('../models/Message'); // Import the Message model
const Chat = require('../models/Chat'); // Import the Chat model

const chatSocket = (server) => {
    const io = socketIO(server);

    // When a client connects
    io.on('connection', (socket) => {
        console.log('New client connected:', socket.id);

        // Join a specific chat room
        socket.on('joinChat', async (chatId) => {
            socket.join(chatId);
            console.log(`Client ${socket.id} joined chat ${chatId}`);
        });

        // Send a message
        socket.on('sendMessage', async ({ chatId, message, senderId }) => {
            const newMessage = new Message({
                chatId,
                senderId,
                message,
            });

            try {
                await newMessage.save();
                // Emit the new message to the chat room
                io.to(chatId).emit('messageReceived', newMessage);
                console.log('Message sent:', newMessage);
            } catch (error) {
                console.error('Error sending message:', error);
            }
        });

        // Handle user disconnect
        socket.on('disconnect', () => {
            console.log('Client disconnected:', socket.id);
        });
    });

    return io; // Return the io instance for further use
};

module.exports = chatSocket;
