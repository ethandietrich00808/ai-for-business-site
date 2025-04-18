import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import utkSmallLogo from '../assets/UTK_Small_Logo_Orange.png';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar" style={{ backgroundColor: '#58595B' }}>
      <div className="sidebar-header">
        <div className="logo-container">
          <img src={utkSmallLogo} alt="UTK Logo" className="sidebar-logo" />
          <span className="sidebar-title">AI For Business</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        <Link 
          to="/" 
          className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
          style={{ color: '#FFFFFF' }}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={`sidebar-link ${location.pathname === '/about' ? 'active' : ''}`}
          style={{ color: '#FFFFFF' }}
        >
          About
        </Link>
        <Link 
          to="/research" 
          className={`sidebar-link ${location.pathname === '/research' ? 'active' : ''}`}
          style={{ color: '#FFFFFF' }}
        >
          Research
        </Link>
        <Link 
          to="/report" 
          className={`sidebar-link ${location.pathname === '/report' ? 'active' : ''}`}
          style={{ color: '#FFFFFF' }}
        >
          Report
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar; 