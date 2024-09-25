// Not Found page 
// src/pages/NotFound.js

import React from 'react';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
                <p className="text-lg mb-4">The page you are looking for does not exist.</p>
                <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;