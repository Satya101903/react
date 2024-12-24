import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    email: '',
    contactNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Signup Successful!');
    navigate('/react');
  };

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
          Signup
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid purple',
                color: '#fff',
              }}
            />
          </div>
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: 'purple',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Signup
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{' '}
          <Link to="/react" className="text-decoration-none" style={{ color: 'purple' }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
