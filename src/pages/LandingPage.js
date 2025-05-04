import React, { useState } from 'react';
import LoginModal from './Login';
import '../style/LandingPage.css';

const LandingPage = ({ onLogin }) => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const handleOpenModal = (mode) => {
    setAuthMode(mode);
    setShowModal(true);
  };

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>Welcome to CV Bot</h1>
        <p>Your personal assistant for resume building and chatbot interaction.</p>
        <div className="btn-group">
          <button onClick={() => handleOpenModal('login')}>Login</button>
          <button onClick={() => handleOpenModal('signup')}>Sign Up</button>
        </div>
        {showModal && (
          <LoginModal
            mode={authMode}
            onClose={() => setShowModal(false)}
            onLogin={onLogin}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
