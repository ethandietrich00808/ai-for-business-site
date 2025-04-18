import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Report.css';

// Import the local images
import workplaceImage from '../assets/Elliot_Dashboard_Screenshot.png';
import careersImage from '../assets/Lorna_Dashboard_Screenshot.png';
import skillsTimeImage from '../assets/Smruti_Dashboard_Screenshot.png';

const Report = () => {
  const navigate = useNavigate();

  const panels = [
    {
      title: "Building Careers with AI Skills",
      image: careersImage,
      link: "/dashboard/careers"
    },
    {
      title: "A Tale of Two Cities: An AI Driven Workplace",
      image: workplaceImage,
      link: "/dashboard/workplace"
    },
    {
      title: "Dissecting AI Skills Through Time",
      image: skillsTimeImage,
      link: "/dashboard/skills-time"
    },
    {
      title: "Skills by Industry",
      image: "https://placehold.co/600x400/FF8200/ffffff?text=AI+Industries",
      link: "/dashboard/industry"
    }
  ];

  return (
    <div className="main-content" style={{ padding: '2rem' }}>
      <h1 style={{ 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        marginBottom: '2rem',
        color: '#58595B'
      }}>
        AI Skills Analysis Dashboards
      </h1>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {panels.map((panel, index) => (
          <div
            key={index}
            className="dashboard-panel"
          >
            <div 
              className="panel-image"
              style={{
                backgroundImage: `url(${panel.image})`
              }}
            />
            <h2 style={{ 
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#58595B',
              borderBottom: '2px solid #FF8200',
              paddingBottom: '0.5rem'
            }}>
              {panel.title}
            </h2>
            <p style={{ 
              color: '#58595B',
              marginBottom: '1rem'
            }}>
              Click to view the full dashboard
            </p>
            <button
              onClick={() => navigate(panel.link)}
              style={{
                backgroundColor: '#FF8200',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '1rem',
                transition: 'background-color 0.2s',
                width: '100%'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#E67500'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF8200'}
            >
              View Full Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report; 