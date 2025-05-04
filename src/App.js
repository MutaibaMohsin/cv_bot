import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import CRUDachviement from './pages/CURDachviemnet';
import CRUDSkills from './pages/CURDskills';
import CURDprojects from './pages/CURDprojects';
import CURDexpierence from './pages/CURDexpierence';
import CURDedu from './pages/CURDedu';
import Layout from './components/Layout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Optional: persist login
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <Route path="/*" element={<LandingPage onLogin={() => setIsAuthenticated(true)} />} />
        ) : (
          <Route path="/" element={<Layout setIsAuthenticated={setIsAuthenticated} />}>
            <Route index element={<Dashboard />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="crud-achviement" element={<CRUDachviement />} />
            <Route path="crud-skills" element={<CRUDSkills />} />
            <Route path="crud-project" element={<CURDprojects />} />
            <Route path="crud-expierence" element={<CURDexpierence />} />
            <Route path="crud-education" element={<CURDedu />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
