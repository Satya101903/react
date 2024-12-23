import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/amazing-beautiful-sky-with-clouds-with-sun_58702-5787.jpg?t=st=1733897502~exp=1733901102~hmac=1939732fa29a1c88db475ae153ca02c698ced2a665d863c27285c86e0cbd5a8f&w=900')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="p-4 p-md-5 text-white"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
          borderRadius: '10px',
          width: '100%',
          maxWidth: '350px',
        }}
      >
        <h3 className="text-center mb-4" style={{ color: 'purple' }}>
          Login
        </h3>

        <form>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
                fontSize: '1rem', 
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
                fontSize: '1rem', 
              }}
            />
          </div>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{' '}
          <Link to="/signup" className="text-decoration-none" style={{ color: 'purple' }}>
            Signup
          </Link>
        </p>

        <Link to="/dashboard">
          <button
            className="btn w-100 my-3"
            style={{
              backgroundColor: 'purple',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Login
          </button>
        </Link>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe" className="ms-2 text-muted">
              Remember me
            </label>
          </div>
          <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#007bff' }}>
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
