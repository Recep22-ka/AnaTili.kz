import React from 'react';
import { Link } from 'react-router-dom'; 
import WordList from '../components/WordList';

const Home = () => {
    
    const containerStyle = {
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#f4f7f6', 
        borderRadius: '10px'
    };
    
    const ctaButtonContainerStyle = { 
        margin: '30px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
    };

    const ctaButtonStyle = {
        padding: '15px 30px',
        fontSize: '1.1rem',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ color: '#007bff', fontSize: '2.5rem', marginBottom: '10px' }}>
                🌟 Қазақ Тілін Үйренуді Баста!
            </h1>
            <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '30px' }}>
                Сөздік қорыңды толықтыр, грамматиканы меңгер және біліміңді тексер.
            </p>

            
            <div style={ctaButtonContainerStyle}>
                <Link to="/grammar" style={{ 
                    ...ctaButtonStyle, 
                    backgroundColor: '#28a745', 
                    color: 'white' 
                }}>
                    📘 Грамматика Ережелері
                </Link>
                <Link to="/quiz" style={{ 
                    ...ctaButtonStyle, 
                    backgroundColor: 'orange', 
                    color: 'white' 
                }}>
                    📝 Тест Тапсыру
                </Link>
            </div>

            
            <div style={{ marginTop: '50px' }}>
                <h2 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
                    Сөздік Қорды Басқару (CRUD Функционалы)
                </h2>
                
                <WordList />
            </div>
            
            <p style={{ marginTop: '30px', color: '#888' }}>
                Құпия бетке кіру үшін "Профиль" сілтемесін басып, "admin/123" қолданыңыз.
            </p>
        </div>
    );
};

export default Home;