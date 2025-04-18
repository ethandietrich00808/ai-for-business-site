import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import utkLargeLogo from '../assets/UTK_Large_Logo.png';
import utkSmallLogo from '../assets/UTK_Small_Logo_Orange.png';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: '#58595B' }}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={utkLargeLogo} alt="UTK Logo" className="large-logo" />
          <img src={utkSmallLogo} alt="UTK Logo" className="small-logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{ color: '#FFFFFF' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" style={{ color: '#FFFFFF' }}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/research" className="nav-link" style={{ color: '#FFFFFF' }}>
              Research
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className="nav-link" style={{ color: '#FFFFFF' }}>
              Report
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 