import React from 'react';
import './CareersDashboard.css';

const CareersDashboard = () => {
  return (
    <div className="careers-dashboard">
      <h1>Building Careers with AI Skills</h1>
      <div className="iframe-container">
        <iframe
          src="https://datalab.utk.edu/ai-for-business-dashboard/GRA_AI_Dashboard/"
          title="AI Careers Dashboard"
          className="dashboard-iframe"
        />
      </div>
    </div>
  );
};

export default CareersDashboard;