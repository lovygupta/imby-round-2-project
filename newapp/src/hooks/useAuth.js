// Custom Auth Hook 
// src/hooks/useAuth.js

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;

export {useAuth}