import React from 'react';
import './WorkplaceDashboard.css';

const WorkplaceDashboard = () => {
  return (
    <div className="workplace-dashboard">
      <h1>A Tale of Two Cities: An AI Driven Workplace</h1>
      <div className="iframe-container">
        <iframe
          src="https://datalab.utk.edu/ai-for-business-dashboard/AIDashbboard/"
          title="AI Workplace Dashboard"
          className="dashboard-iframe"
        />
      </div>
    </div>
  );
};

export default WorkplaceDashboard; 