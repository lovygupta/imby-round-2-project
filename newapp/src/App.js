// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import AuthForm from './components/Auth/AuthForm';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/auth" element={<AuthForm/>} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route element={<NotFound/>} /> {/* This will catch all unmatched routes */}
            </Routes>
        </Router>
    );
}

export default App;