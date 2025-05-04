// mainpage.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Sidebar } from '../components/SideBar';

const skillData = [
  { skill: 'Python', percentage: 85 },
  { skill: 'JavaScript', percentage: 75 },
  { skill: 'C++', percentage: 65 },
  { skill: 'SQL', percentage: 70 },
  { skill: 'React', percentage: 60 }
];

export const MainPage = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <main className="dashboard-content">
        <h1 className="dashboard-heading">Welcome to MindSpark Dashboard</h1>

        <div className="card-grid">
          <div className="card">
            <h2 className="card-title">Programming Skills (%)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="percentage" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h2 className="card-title">Total Skills Extracted</h2>
            <div className="skill-count">5</div>
            <p className="card-subtext">Based on CV analysis</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
