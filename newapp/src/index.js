// Entry point for React 
// src/index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
 // Import global CSS (including Tailwind styles)

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <ChatProvider>
        <App /> {/* Render the App component */}
            </ChatProvider>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root') // Target the root element in your HTML
);