import React from 'react';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        border: '8px solid #f3f3f3',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      <h1 style={{
        fontSize: '2rem',
        color: '#2c3e50',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        marginBottom: '10px'
      }}>
        AI for Business
      </h1>
      <p style={{
        color: '#7f8c8d',
        fontSize: '1.1rem'
      }}>
        Loading...
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading; 