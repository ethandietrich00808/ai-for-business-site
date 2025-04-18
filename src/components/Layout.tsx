import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Analytics Dashboard</h1>
        <nav>
          <Link to="/" className="nav-link">Main Dashboard</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #E5E7EB' }}>
            <h2 style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6B7280', textTransform: 'uppercase', padding: '0 1rem', marginBottom: '0.5rem' }}>Reports</h2>
            <Link to="/report/1" className="nav-link">Sales Report</Link>
            <Link to="/report/2" className="nav-link">User Analytics</Link>
            <Link to="/report/3" className="nav-link">Performance Metrics</Link>
          </div>
        </nav>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout 