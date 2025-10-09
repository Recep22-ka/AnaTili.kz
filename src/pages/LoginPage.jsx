import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, user } = useAuth();
    
    if (user) return <Navigate to="/profile" replace />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            // Сәтті кіру
        } else {
            setError('❌ Қате логин/пароль. Логин: admin, Пароль: 123');
        }
    };
    
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '30px auto', background: 'white', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <h2>🔐 Жүйеге Кіру</h2>
            <p style={{ color: error.includes('❌') ? '#dc3545' : '#28a745' }}>{error}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Логин (admin)" style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль (123)" style={{ display: 'block', margin: '10px 0', padding: '10px', width: '100%' }} />
                <button type="submit" style={{ background: '#28a745', color: 'white', padding: '10px 20px' }}>Кіру</button>
            </form>
        </div>
    );
};
export default LoginPage;