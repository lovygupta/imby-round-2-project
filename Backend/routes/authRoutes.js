const express = require('express');
const { register, login, getCurrentUser } = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

// Register user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get current user
router.get('/me', authenticate,getCurrentUser); // Protect this route with authentication middleware

module.exports = router;
