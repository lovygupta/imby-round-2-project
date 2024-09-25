// Navbar component 
// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using react-router for navigation
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const {user,logout} = useAuth();
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">ChatApp</h1>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Home
                    </Link>
                    {user?
                    <>
                    <Link to="/chat" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Chat
                    </Link>
                    <button onClick={logout} className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Logout
                    </button>
                    </>:
                    <>
                    <Link to="/auth" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Login
                    </Link>
                    </>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;