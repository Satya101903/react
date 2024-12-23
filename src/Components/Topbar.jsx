import React from 'react';
import { useCart } from '../Cartcontex';
import { Link } from 'react-router-dom';

function Topbar() {
  const { cart } = useCart();  

  return (
    <div
      style={{
        padding: '2rem',
        backgroundColor: '#D4BBDD',
        color: 'purple',
        fontFamily: 'Poppins',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        textAlign: 'center', 
        position: 'relative',
      }}
    >
  
      <h2
        style={{
          marginBottom: '10px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          margin: 0,
        }}
      >
       Beauty Basket
      </h2>

    
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginTop: '10px',
          width: '100%',
        }}
      >
    
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: '500',
          }}
        >
          Cart: {cart.length} items
        </span>

        <Link
          to="/cartpage"
          style={{
            color: 'purple',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.color = '#6A4C93')}
          onMouseOut={(e) => (e.target.style.color = 'purple')}
        >
          Go to Cart
        </Link>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Adjust title size for mobile */
          h2 {
            font-size: 2rem;
          }

          /* Stack the cart info and link vertically */
          .cart-info {
            flex-direction: column;
            align-items: flex-start;
          }

          /* Make cart text larger and center the cart link */
          .cart-info span {
            font-size: 1.3rem;
            margin-bottom: 5px;
          }

          .cart-info a {
            font-size: 1.1rem;
            margin-left: 0;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Topbar;
