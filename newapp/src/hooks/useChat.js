// Custom Chat Hook 
// src/hooks/useChat.js

import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const useChat = () => {
    return useContext(ChatContext);
};

export default useChat;
export {useChat}