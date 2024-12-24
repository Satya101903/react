import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div
      style={{
        width: '16%',
        backgroundColor: '#BD97CB', 
        padding: '2rem 1rem',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.2)',
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#F3F0B0',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#F3F0B0',
          marginBottom: '2rem',
          letterSpacing: '1px',
        }}
      >
       <span style={{color: 'purple'}}>Be.</span>Beauty!
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
        <li style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/dashboard"
            style={{
              textDecoration: 'none',
              color: '#F3F0B0',
              fontWeight: '500',
              fontSize: '1.1rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              display: 'inline-block',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#F3F0B0'; 
              e.target.style.color = '#6A4C93'; 
              e.target.style.transform = 'translateX(5px)'; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent'; 
              e.target.style.color = '#F3F0B0'; 
              e.target.style.transform = 'translateX(0)'; 
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/skincare"
            style={{
              textDecoration: 'none',
              color: '#F3F0B0',
              fontWeight: '500',
              fontSize: '1.1rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              display: 'inline-block',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#F3F0B0'; 
              e.target.style.color = '#6A4C93'; 
              e.target.style.transform = 'translateX(5px)'; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent'; 
              e.target.style.color = '#F3F0B0'; 
              e.target.style.transform = 'translateX(0)'; 
            }}
          >
            Skincare
          </Link>
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/haircare"
            style={{
              textDecoration: 'none',
              color: '#F3F0B0',
              fontWeight: '500',
              fontSize: '1.1rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              display: 'inline-block',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#F3F0B0'; 
              e.target.style.color = '#6A4C93'; 
              e.target.style.transform = 'translateX(5px)'; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent'; 
              e.target.style.color = '#F3F0B0'; 
              e.target.style.transform = 'translateX(0)';
            }}
          >
            Haircare
          </Link>
        </li>
        <li style={{ marginBottom: '1.5rem' }}>
          <Link
            to="/fragances"
            style={{
              textDecoration: 'none',
              color: '#F3F0B0',
              fontWeight: '500',
              fontSize: '1.1rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              display: 'inline-block',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#F3F0B0'; 
              e.target.style.color = '#6A4C93'; 
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent'; 
              e.target.style.color = '#F3F0B0'; 
              e.target.style.transform = 'translateX(0)'; 
            }}
          >
            Fragrance
          </Link>
        </li>
      </ul>

      <div style={{ marginTop: '3rem' }}>
        <Link
          to="/react"
          style={{
            textDecoration: 'none',
            color: '#F3F0B0',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s, transform 0.3s',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            display: 'inline-block',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#F3F0B0';
            e.target.style.color = '#6A4C93';
            e.target.style.transform = 'translateX(5px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#F3F0B0';
            e.target.style.transform = 'translateX(0)';
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
