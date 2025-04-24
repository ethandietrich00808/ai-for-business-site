import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">AI For Business Research</h1>
        <p className="hero-subtitle">Analyzing the impact of artificial intelligence on workforce demands and the evolving skill sets required in the modern job market</p>
        <button 
          className="cta-button"
          onClick={() => navigate('/report')}
        >
          View Research Reports
        </button>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h2>Research Focus</h2>
          <p>Our team investigates how AI skills are transforming business operations, workforce dynamics, and industry standards.</p>
        </div>
        <div className="feature-card">
          <h2>Data-Driven Insights</h2>
          <p>Leveraging advanced analytics to uncover meaningful patterns in business and employment data.</p>
        </div>
        <div className="feature-card">
          <h2>Industry Impact</h2>
          <p>Understanding how AI skills are reshaping career paths and workplace requirements across various sectors.</p>
        </div>
      </div>

      <div className="mission-section">
        <h2 className="mission-title">Our Mission</h2>
        <div className="mission-content">
          <p>
            Artificial Intelligence (AI) has become deeply embedded in the fabric of our society, influencing everything from everyday tasks to complex business operations.
          </p>
          <p>
            As a team of interdisciplinary researchers and students, we are committed to understanding and advancing the field of AI. Our mission is threefold: to research the development of AI technologies, to facilitate the seamless integration of AI into various business functions, and to assess the broader societal impacts of AI innovations.
          </p>
          <p>
            By doing so, we aim to empower the next generation of students with the knowledge and skills necessary to thrive in an AI-driven world and to ensure our university remains at the forefront of cutting-edge AI research and education.
          </p>
          <p>
            Through collaboration across different fields, we strive to address the challenges and opportunities presented by AI, ultimately contributing to a future where these technologies are used responsibly and effectively to benefit all members of our society.
          </p>
          <div className="acknowledgments">
            <p className="funding-acknowledgment">
              Our research has been partially supported by a seed grant from the AI Tennessee Initiative at the University of Tennessee Knoxville.
            </p>
            <p className="data-acknowledgment">
              <em>The job postings are provided by <a href="https://lightcast.io/" target="_blank" rel="noopener noreferrer">Lightcast</a>.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 