// API Service for Authentication 
// src/services/AuthService.js

const API_URL = 'https://backend-54vi7a0ec-lovy-guptas-projects.vercel.app/api/auth'; // Update with your backend URL

const AuthService = {
    login: async (credentials) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token in localStorage
        return data.user; // Return user data
    },

    logout: async () => {
        localStorage.removeItem('token'); // Clear token
    },

    getCurrentUser: async () => {
        const token = localStorage.getItem('token');
        if (!token) return null;

        const response = await fetch(`${API_URL}/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        return await response.json(); // Return current user data
    },
};

export default AuthService;
