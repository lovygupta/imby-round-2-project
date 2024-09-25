// Common Auth Form component 
// src/components/Auth/AuthForm.js

import React, { useState } from 'react';
import Login from './Login'; // Import the Login component
import Signup from './Signup'; // Import the Signup component
import useAuth from '../../hooks/useAuth';

const AuthForm = () => {
    const {user} = useAuth();
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

    const toggleForm = () => {
        setIsLogin(!isLogin); // Toggle the form state
    };

    if(user){
        window.location.pathname = "/"
    }

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                {isLogin ? (
                    <Login /> // Show the Login component
                ) : (
                    <Signup /> // Show the Signup component
                )}
                <div className="mt-4 text-center">
                    <button
                        onClick={toggleForm}
                        className="text-blue-600 hover:underline focus:outline-none"
                    >
                        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;