import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); 

export const PrivateRoute = ({ children }) => { 
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" replace />;
    return children;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === 'admin' && password === '123') {
            setUser({ name: username });
            return true;
        }
        return false;
    };
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};