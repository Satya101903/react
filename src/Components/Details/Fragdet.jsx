import React, { useState } from 'react';
import { FragranceData } from '../Data/Fragances';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Sidenav from '../Sidenav';
import { useCart } from '../../Cartcontex';
import Topbar from '../Topbar';
import { Link } from 'react-router-dom';

function Fragdet() {
  const [cart, setCart] = useState(0);
  const { addToCart } = useCart();  
  let { id } = useParams();
  let productDet = FragranceData.find((item) => item.id == id);

  if (!productDet) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'black',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h3 style={{ color: 'red' }}>Product not found</h3>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(productDet);  
    setCart(cart + 1);
  };

  return (
    <Row style={{ height: '100vh', backgroundColor: 'lavenderblush', margin: 0 }}>
      {/* Side Navigation */}
      <Col sm={2} style={{ backgroundColor: '#f5f5f5', boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', paddingLeft: '0' }} className="d-none d-sm-block">
        <Sidenav />
      </Col>

      <Col sm={10} style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
        {/* Topbar */}
        <Topbar />

        <Col
          sm={12}
          style={{
            display: 'flex',
            justifyContent: 'center',  
            alignItems: 'center',  
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            maxWidth: '900px',  
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',  
          }}
        >
          <Row style={{ width: '100%' }}>
          
            <Col sm={12} md={6} style={{ padding: '20px' }}>
              <h2 style={{ color: '#6A5ACD', marginBottom: '20px' }}>{productDet.Brand}</h2>
              <p><strong>Type:</strong> {productDet.Type}</p>
              <p><strong>Price:</strong> ${productDet.Price}</p>
              <p><strong>Items in Cart:</strong> {cart}</p>
              <button
                className="btn"
                style={{
                  backgroundColor: '#6A5ACD',
                  color: '#fff',
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  marginTop: '10px',
                
                }}
                onClick={handleAddToCart}  
              >
                Add to Cart
              </button>
            </Col>

            <Col sm={12} md={6} style={{ textAlign: 'center', padding: '20px' }}>
              <img
                src={productDet.Images}
                alt={productDet.Brand}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
           
            </Col>
            <Link to="/fragances" style={{ textDecoration: 'none' }}>View More...</Link>
          </Row>
        </Col>
      </Col>

      {/* Mobile responsiveness using inline styles */}
      <style>
        {`
          @media (max-width: 768px) {
            /* Stack elements vertically on small screens */
            .col-sm-12 {
              width: 100% !important;
            }

            /* Adjust padding for mobile */
            .btn {
              padding: 12px;
              font-size: 1.2rem;
            }

            h2 {
              font-size: 1.8rem;
            }

            /* Adjust image to fit well in mobile view */
            img {
              width: 100%;
              height: auto;
              border-radius: 10px;
            }

            /* Stack the text and image */
            .product-details {
              flex-direction: column;
            }
          }
        `}
      </style>
    </Row>
  );
}

export default Fragdet;
