// Chat page 
// src/pages/Chat.js

import React, { useState } from 'react';
import ChatWindow from '../components/Chat/ChatWindow'; // Import your ChatWindow component
import ChatList from '../components/Chat/ChatList'; // Import your ChatList component
import { useChat } from '../hooks/useChat'; // Assuming you have a context for chat
import useAuth from '../hooks/useAuth';

const Chat = () => {
    const { messages, currentChatId ,setActiveChat,activeChat} = useChat(); // Get chats and current chat ID from context

    const {user} = useAuth();
    const [userId,setUserId] = useState("")
    if(!user){
        window.location.pathname= "/auth"
    }

    const onSubmit =async ()=>{
        await fetch("https://backend-54vi7a0ec-lovy-guptas-projects.vercel.app/api/chats/chat",{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify({userId})
        }).then(res=>{
            if(res.status==201){
                setActiveChat(res.formData._id)
            }
        })
    }
    return (
        <div className="flex h-screen">
            <div className="flex-1">
                <h1 className="text-center text-xl">{activeChat}</h1>
                {currentChatId ? (
                    <ChatWindow chatId={currentChatId} /> // Display chat window for selected chat
                ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                        <label hemlFor="userid">User Id</label>
                        <input type='text' className={"border border-black"} name="userid" value ={userId} onChange={e=>setUserId(e.target.value)}></input>
                        <button onClick={onSubmit} className="text-xl">Start a chat</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chat;