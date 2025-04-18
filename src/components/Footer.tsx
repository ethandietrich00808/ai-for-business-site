import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="footer-title">The University of Tennessee, Knoxville</p>
          <p className="footer-address">Knoxville, Tennessee 37996</p>
          <p className="footer-phone">865-974-1000</p>
        </div>
        <div className="footer-links">
          <a href="https://utk.edu" target="_blank" rel="noopener noreferrer" className="footer-link">
            UTK Website
          </a>
          <a href="https://haslam.utk.edu" target="_blank" rel="noopener noreferrer" className="footer-link">
            Haslam College of Business
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 