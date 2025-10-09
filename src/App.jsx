import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, PrivateRoute } from './hooks/useAuth'; 
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Grammar from './pages/Grammar';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Navbar /> 
          <div className="content" style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 20px' }}> {/* 9. Responsive дизайн қаңқасы */}
            <Routes>
              {/* 5. Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/grammar" element={<Grammar />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="*" element={<h2 style={{ textAlign: 'center', color: '#dc3545' }}>404 - Бет табылмады</h2>} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};
export default App;