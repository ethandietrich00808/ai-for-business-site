import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Report from './pages/Report';
import CareersDashboard from './pages/CareersDashboard';
import WorkplaceDashboard from './pages/WorkplaceDashboard';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content-wrapper">
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/report" element={<Report />} />
              <Route path="/dashboard/careers" element={<CareersDashboard />} />
              <Route path="/dashboard/workplace" element={<WorkplaceDashboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;