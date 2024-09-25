// Authentication Context 
// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import AuthService from '../services/AuthService'; // Import your AuthService

export const AuthContext = createContext({ user:null, loading:true, login(){}, logout(){},signup(){}});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check for an authenticated user on mount
        const fetchUser = async () => {
            try {
                const currentUser = await AuthService.getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Failed to fetch user:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        const loggedInUser = await AuthService.login(credentials);
        setUser(loggedInUser);
    };
    const signup = async (credentials) => {
        const response = await fetch(`https://backend-54vi7a0ec-lovy-guptas-projects.vercel.app/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
    
        if (!response.ok) {
            throw new Error('Signup failed');
        }
    
        return await response.json(); // Return response or user data
    };

    const logout = async () => {
        await AuthService.logout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout,signup}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
