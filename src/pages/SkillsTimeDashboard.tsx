import React from 'react';
import './SkillsTimeDashboard.css';

const SkillsTimeDashboard = () => {
  return (
    <div className="skills-time-dashboard">
      <h1>Dissecting AI Skills Through Time</h1>
      <div className="iframe-container">
        <iframe
          src="https://datalab.utk.edu/ai-for-business-dashboard/skill-cluster-dashboard/"
          title="AI Skills Time Dashboard"
          className="dashboard-iframe"
        />
      </div>
    </div>
  );
};

export default SkillsTimeDashboard; 