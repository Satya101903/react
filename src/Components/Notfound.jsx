import React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: '#f8f9fa', 
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ fontSize: '6rem', color: '#343a40', fontWeight: 'bold' }}>404</h1>
        <h3 style={{ color: '#6c757d', marginBottom: '1rem' }}>
          Oops! Page Not Found
        </h3>
        <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: '#007bff',
              border: 'none',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '5px',
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
