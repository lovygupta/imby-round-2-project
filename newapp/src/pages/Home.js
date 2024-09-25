// Home page 
// src/pages/Home.js

import React from 'react';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp</h1>
                <p className="text-lg mb-4">Connect and chat with your friends in real time.</p>
                <a href="/chat" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Go to Chat
                </a>
            </div>
        </div>
    );
};

export default Home;