// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Chatbot from '../pages/Chatbot';
import CRUDachviement from '../pages/CURDachviement';
import CRUDSkills from '../pages/CRUDSkills';
import CURDprojects from '../pages/CURDprojects.js';
import CURDexpierence from '../pages/CURDexpierence.js';
import CURDedu from '../pages/CURDedu.js';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/crud-achviement" element={<CRUDachviement />} />
      <Route path="/crud-skills" element={<CRUDSkills />} />
      <Route path="/crud-project" element={<CURDprojects />} />
      <Route path="/crud-expierence" element={<CURDexpierence />} />
      <Route path="/crud-education" element={<CURDedu />} />


    </Routes>
  );
};

export default AppRoutes;
