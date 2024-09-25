// Socket.IO configuration 
// src/socket/socket.js

import { io } from 'socket.io-client';

const SOCKET_URL = 'https://backend-54vi7a0ec-lovy-guptas-projects.vercel.app'; // Update with your backend URL
const socket = io(SOCKET_URL, {
    autoConnect: false, // Disable auto connection; manage connection manually
});

// Function to connect to the socket
export const connectSocket = (token) => {
    socket.auth = { token }; // Pass the token for authentication
    socket.connect(); // Connect to the server
};

// Function to disconnect from the socket
export const disconnectSocket = () => {
    socket.disconnect();
};

// Listen for incoming messages
export const listenForMessages = (callback) => {
    socket.on('message', (message) => {
        callback(message); // Invoke the callback with the received message
    });
};

// Emit a new message
export const sendMessage = (chatId, message) => {
    socket.emit('message', { chatId, message });
};

// Listen for the connection event
export const onConnect = (callback) => {
    socket.on('connect', () => {
        callback(); // Call the provided callback when connected
    });
};

// Listen for the disconnect event
export const onDisconnect = (callback) => {
    socket.on('disconnect', () => {
        callback(); // Call the provided callback when disconnected
    });
};

export default socket;
