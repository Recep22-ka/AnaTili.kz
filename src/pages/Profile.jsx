import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div style={{ padding: '20px', background: 'lightblue', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <h1 style={{ color: '#007bff' }}>👑 Қорғалған Профиль</h1>
            <p style={{ fontSize: '1.1rem' }}>Құттықтаймыз, **{user?.name}**! Бұл бетті тек тіркелген қолданушылар көре алады.</p>
        </div>
    );
};
export default Profile;