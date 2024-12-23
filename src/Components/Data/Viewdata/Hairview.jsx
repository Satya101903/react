import React from 'react';
import { HaircareData } from '../Haircare'; 
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Sidenav from '../../Sidenav';

function Hairview() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Row>
        <Col xs={12} sm={3} md={2} style={{ backgroundColor: '#f8f9fa', minHeight: '100vh',  paddingRight: '0%' }}>
          <Sidenav />
        </Col>


        <Col xs={12} sm={9} md={10} style={{ backgroundColor: '#D4BBDD', padding: '2rem' }}>
       
          <Link to='/dashboard'>
            <p style={{
              color: 'purple', 
              marginBottom: '2rem', 
              fontWeight: 'bold', 
              fontSize: '20px', 
              textDecoration: 'none'
            }}>
              Back
            </p>
          </Link>

       
          <h3 style={{
            color: 'purple', 
            marginBottom: '2rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            fontFamily: 'poppins',
            fontSize: '40px',
          }}>
            Explore Our Haircare Collection
          </h3>

          <Row>
            {HaircareData.map((item) => (
              <Col 
                key={item.id} 
                xs={12} sm={6} md={4} lg={3} 
                style={{ marginBottom: '1rem', padding: '0.5rem' }}
              >
                <Card
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    height: '350px',
                    backgroundColor: 'lavenderblush'
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.Images}
                    alt={item.Type}
                    style={{
                      height: '200px',
                      objectFit: 'contain',
                      padding: '10px'
                    }}
                  />
                  <Card.Body style={{ padding: '10px', textAlign: 'center' }}>
                    <Card.Title style={{
                      fontSize: '16px', 
                      fontWeight: 'bold', 
                      marginBottom: '10px'
                    }}>
                      {item.Type}
                    </Card.Title>
                    <Card.Text style={{
                      fontSize: '14px', 
                      marginBottom: '10px', 
                      color: '#555'
                    }}>
                      Brand: {item.Brand}
                    </Card.Text>
                    <Card.Text style={{
                      fontSize: '14px', 
                      marginBottom: '10px', 
                      color: '#555'
                    }}>
                      Price: ${item.Price}
                    </Card.Text>
                    <Link
                      to={`/Haircare/${item.id}`}
                      className="btn btn-primary btn-sm"
                      style={{
                        backgroundColor: '#6f42c1',
                        borderColor: '#6f42c1',
                        fontWeight: 'bold',
                        padding: '5px 10px', 
                        fontSize: '14px', 
                      }}
                    >
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Hairview;
