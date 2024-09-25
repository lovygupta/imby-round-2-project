const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors'); // Optional: if you're using CORS
const chatSocket = require('./sockets/chatSocket'); // Import chat socket
const userRoutes = require('./routes/authRoutes'); // Import user routes
const chatRoutes = require('./routes/chatRoutes'); // Import chat routes
const messageRoutes = require('./routes/messageRoutes'); // Import message routes
const { authenticate } = require('./middleware/auth'); // Import authentication middleware

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://wizlgupta:SEsebuvHjjrv6zB6@mydatabase.6siek.mongodb.net/chatapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', userRoutes); // User-related routes
app.use('/api/chats', authenticate, chatRoutes); // Chat-related routes
app.use('/api/messages', authenticate, messageRoutes); // Message-related routes

// Initialize chat socket
const io = chatSocket(server);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle socket connections
io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});
