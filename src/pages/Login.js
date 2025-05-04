import React, { useState } from 'react';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
const BASE_URL = "https://cv-bot-backend.onrender.com/user";

const Login = ({ mode, onClose, onLogin }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const isSignUp = mode === 'signup';

  const handleSubmit = async () => {
    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const payload = {
      username: email,
      password,
    };

    if (isSignUp) {
      payload.email = email;
    }

    const endpoint = isSignUp ? '/signup' : '/login';

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {  // Use the base URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setError(data.detail || 'Something went wrong!');
        return;
      }

      if (isSignUp) {
        alert('Signup successful!');
      } else {
        alert('Login successful!');
        localStorage.setItem('token', data.access_token);
      }

      onLogin(data);
      onClose();
      navigate('/');

    } catch (error) {
      console.error('Error:', error);
      setError('Server error!');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="modal-heading">{isSignUp ? 'Sign Up' : 'Login'}</h2>

        {error && <div className="error-message">{error}</div>}

        {isSignUp && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br/>
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        {isSignUp && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            /><br/>
          </>
        )}

        <button onClick={handleSubmit}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
        <button onClick={onClose} className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default Login;
