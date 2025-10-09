import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav style={{ background: '#007bff', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>🇰🇿 Қазақ Тілі APP</div>
      <div className="links">
       
        <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Басты</Link>
        <Link to="/grammar" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Грамматика</Link>
        <Link to="/quiz" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Тест</Link>
        <Link to="/profile" style={{ color: 'yellow', margin: '0 10px', fontWeight: 'bold', textDecoration: 'none' }}>Профиль</Link>
        {user ? (
          <button onClick={logout} style={{ marginLeft: '15px', background: '#dc3545', padding: '5px 10px', borderRadius: '5px', border: 'none', color: 'white' }}>Шығу</button>
        ) : (
          <Link to="/login" style={{ color: 'white', marginLeft: '15px', textDecoration: 'none' }}>Кіру</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;