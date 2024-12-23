import React, { useState, useEffect } from 'react'; 
import { Carousel, Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidenav from '../Sidenav';
import { SkincareData } from '../Data/Skincare';
import { HaircareData } from '../Data/Haircare';
import { FragranceData } from '../Data/Fragances';

function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);  

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);  

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Row noGutters>
      
        <Col
          sm={2}
          style={{
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            display: isMobile && !sidebarOpen ? 'none' : 'block',
            transition: 'all 0.3s',
          }}
        >
          <Sidenav />
        </Col>

      
        <Col
          sm={10}
          style={{
            fontFamily: 'Poppins',
            backgroundColor: '#D4BBDD',
            padding: '2rem',
            overflowX: 'hidden',
          }}
        >
        
          {isMobile && (
            <Button
              variant="primary"
              onClick={toggleSidebar}
              style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                zIndex: 10,
                borderRadius: '50%',
                padding: '13px',
                backgroundColor: 'purple',
              }}
            >
              {sidebarOpen ? 'Close' : 'Menu'}
            </Button>
          )}

<h3
  style={{
    color: 'transparent', 
    backgroundImage: 'linear-gradient(to right,rgb(170, 39, 202),rgb(141, 68, 168),rgb(148, 99, 167))', 
    backgroundClip: 'text', 
    WebkitBackgroundClip: 'text', 
    marginBottom: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: isMobile ? '2rem' : '3rem',
  }}
> 
  Our New Collection
</h3>

        {/* Carousel Section */}
<div style={{ marginBottom: '3rem' }}>
  <Carousel fade interval={500} controls={false} indicators={true}>
    <Carousel.Item>
      <img
        src="https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg?sfvrsn=616dd3f2_1"
        alt="Skin care"
        style={{
          width: '100%',
          borderRadius: '15px',
          height: isMobile ? '300px' : '500px',
          opacity: '0.85', 
          objectFit: 'cover', 
        }}
      />
      <Carousel.Caption
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          right: '30px',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.4)', 
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        }}
      >
        <h5
          style={{
            fontSize: isMobile ? '26px' : '36px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontFamily: 'Montserrat, sans-serif', 
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)', 
          }}
        >
          Skin care
        </h5>
        <p
          style={{
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: '1.5',
            fontFamily: 'Poppins, sans-serif',
            fontStyle: 'italic',
          }}
        >
          "Unleash your skin’s true beauty with our carefully curated skincare products for all skin types."
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        src="https://images.pexels.com/photos/8468019/pexels-photo-8468019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hair care"
        style={{
          width: '100%',
          borderRadius: '15px',
          height: isMobile ? '300px' : '500px',
          objectFit: 'cover',
        }}
      />
      <Carousel.Caption
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          right: '30px',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h5
          style={{
            fontSize: isMobile ? '26px' : '36px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
          }}
        >
          Hair care
        </h5>
        <p
          style={{
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: '1.5',
            fontFamily: 'Poppins, sans-serif',
            fontStyle: 'italic',
          }}
        >
          "Nourish your hair and reveal its natural beauty with every wash—shine and strength await!"
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        src="https://www.goodnet.org/photos/620x0/29829_hd.jpg"
        alt="Fragrances"
        style={{
          width: '100%',
          borderRadius: '15px',
          height: isMobile ? '300px' : '500px',
          objectFit: 'cover',
        }}
      />
      <Carousel.Caption
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '30px',
          right: '30px',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h5
          style={{
            fontSize: isMobile ? '26px' : '36px',
            fontWeight: 'bold',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontFamily: 'Montserrat, sans-serif',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
          }}
        >
          Fragrances
        </h5>
        <p
          style={{
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: '1.5',
            fontFamily: 'Poppins, sans-serif',
            fontStyle: 'italic',
          }}
        >
          "A scent that tells your story—unforgettable, luxurious, and ready to enhance every moment."
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
<h1
  style={{
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 'bold',
    color: 'purple',
    fontSize: isMobile ? '1.8rem' : '2.5rem',
    animation: 'blink 1s step-start infinite', 
  }}
>
  Our Top Branded Products
</h1>

<style>
  {`
    @keyframes blink {
     
      50% { opacity: 0.5; }
      80% { opacity: 1; }
    }
  `}
</style>


          {/* Skincare Section */}
          <div
            style={{
              backgroundColor: '#D4BBDD',
              borderRadius: '10px',
              padding: '2rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              marginBottom: '2rem',
            }}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#6f42c1'}}>Skincare</h1>
            <Row>
              {SkincareData.slice(0, 4).map((skin) => (
                <Col key={skin.id} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                  <Card
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      height: isMobile ? 'auto' : '350px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={skin.Images}
                      alt={skin.Type}
                      style={{
                        height: isMobile ? '200px' : '200px',
                        objectFit: 'contain',
                        padding: '10px',
                      }}
                    />
                    <Card.Body
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        backgroundColor: 'lavenderblush',
                      }}
                    >
                      <Card.Title style={{ fontSize: '16px' }}>{skin.Type}</Card.Title>
                      <Card.Text style={{ fontSize: '14px', marginBottom: '10px' }}>Brand: {skin.Brand}</Card.Text>
                      <Card.Text style={{ fontSize: '14px', marginBottom: '10px' }}>Price: ${skin.Price}</Card.Text>
                      <Link
                        to={`/skincare/${skin.id}`}
                        className="btn btn-primary btn-sm"
                        style={{
                          backgroundColor: '#6f42c1',
                          borderColor: '#6f42c1',
                          fontWeight: 'bold',
                        }}
                      >
                        View Details
                      </Link>
                    </Card.Body>
                  </Card> 
                </Col>
              ))}
            </Row>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/skincare" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    backgroundColor: '#6f42c1',
                    borderColor: '#6f42c1',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: 'auto',
                    maxWidth: '200px',
                    display: 'inline-block',
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>

          {/* Haircare Section */}
          <div
            style={{
              backgroundColor: '#D4BBDD',
              borderRadius: '10px',
              padding: '2rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              marginBottom: '2rem',
            }}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '2rem',color: '#6f42c1' }}>Haircare</h1>
            <Row>
              {HaircareData.slice(0, 4).map((hair) => (
                <Col key={hair.id} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                  <Card
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      height: isMobile ? 'auto' : '350px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={hair.Images}
                      alt={hair.Type}
                      style={{
                        height: isMobile ? '200px' : '200px',
                        objectFit: 'contain',
                        padding: '10px',
                      }}
                    />
                    <Card.Body
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        backgroundColor: 'lavenderblush',
                      }}
                    >
                      <Card.Title style={{ fontSize: '16px' }}>{hair.Type}</Card.Title>
                      <Card.Text style={{ fontSize: '14px', marginBottom: '10px' }}>Brand: {hair.Brand}</Card.Text>
                      <Card.Text style={{ fontSize: '14px', marginBottom: '10px' }}>Price: ${hair.Price}</Card.Text>
                      <Link
                        to={`/haircare/${hair.id}`}
                        className="btn btn-primary btn-sm"
                        style={{
                          backgroundColor: '#6f42c1',
                          borderColor: '#6f42c1',
                          fontWeight: 'bold',
                        }}
                      >
                        View Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/haircare" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    backgroundColor: '#6f42c1',
                    borderColor: '#6f42c1',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: 'auto',
                    maxWidth: '200px',
                    display: 'inline-block',
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>

          {/* Fragrance Section */}
          <div
            style={{
              backgroundColor: '#D4BBDD',
              borderRadius: '10px',
              padding: '2rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              marginBottom: '2rem',
            }}
          >
            <h1 style={{ textAlign: 'center', marginBottom: '2rem',color: '#6f42c1' }}>Fragrances</h1>
            <Row>
              {FragranceData.slice(0, 4).map((frag) => (
                <Col key={frag.id} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                  <Card
                    style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      height: isMobile ? 'auto' : '350px',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={frag.Images}
                      alt={frag.Type}
                      style={{
                        height: isMobile ? '200px' : '200px',
                        objectFit: 'contain',
                        padding: '10px',
                      }}
                    />
                    <Card.Body
                      style={{
                        padding: '10px',
                        textAlign: 'center',
                        backgroundColor: 'lavenderblush',
                      }}
                    >
                      <Card.Title style={{ fontSize: '16px' }}>{frag.Type}</Card.Title>
                      <Card.Text style={{ fontSize: '14px', marginBottom: '10px' }}>Brand: {frag.Brand}</Card.Text>
                      <Card.Text style={{ fontSize: '14px', marginBottom: '10px' }}>Price: ${frag.Price}</Card.Text>
                      <Link
                        to={`/fragances/${frag.id}`}
                        className="btn btn-primary btn-sm"
                        style={{
                          backgroundColor: '#6f42c1',
                          borderColor: '#6f42c1',
                          fontWeight: 'bold',
                        }}
                      >
                        View Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <Link to="/fragances" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    backgroundColor: '#6f42c1',
                    borderColor: '#6f42c1',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: 'auto',
                    maxWidth: '200px',
                    display: 'inline-block',
                  }}
                >
                  View All
                </button>
              </Link>
            </div>
          </div>
             {/* Customer Reviews Section */}
             <div style={{
            backgroundColor: '#D4BBDD',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            marginBottom: '2rem'
          }}>
            <h1 style={{
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 'bold'
            }}>
              Customer Reviews
            </h1>
            <Row>
              <Col sm={12} md={4}>
                <Card style={{
                  borderRadius: '10px',
                  padding: '1rem',
                  backgroundColor: 'lavenderblush',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}>
                  <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.daST8I5pmEFYHEU29hfIGAHaEK&pid=Api&P=0&h=180"
                      alt="Lillian"
                      style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div style={{ marginLeft: '1rem' }}>
                      <Card.Title style={{
                        color: 'purple',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}>
                        Lillian
                      </Card.Title>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem' }}>(5/5)</span>
                      </div>
                      <Card.Text style={{ fontSize: '14px', marginTop: '1rem' }}>
                        "I absolutely love the skincare products! They make my skin feel rejuvenated and fresh. The results are visible within days!"
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Review 2 */}
              <Col sm={12} md={4}>
                <Card style={{
                  borderRadius: '10px',
                  padding: '1rem',
                  backgroundColor: 'lavenderblush',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}>
                  <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src="https://tse2.mm.bing.net/th?id=OIP.YAZDwVK4mkJfWFeRatEVKQHaEK&pid=Api&P=0&h=180"
                      alt="Zoey"
                      style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div style={{ marginLeft: '1rem' }}>
                      <Card.Title style={{
                        color: 'purple',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}>
                        Zoey
                      </Card.Title>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem' }}>(5/5)</span>
                      </div>
                      <Card.Text style={{ fontSize: '14px', marginTop: '1rem' }}>
                        "The haircare products are fantastic! My hair feels smoother and more hydrated. I can't wait to try the whole range."
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Review 3 */}
              <Col sm={12} md={4}>
                <Card style={{
                  borderRadius: '10px',
                  padding: '1rem',
                  backgroundColor: 'lavenderblush',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}>
                  <Card.Body style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src="https://tse2.explicit.bing.net/th?id=OIP.bq7ovZESfNPCCwBfvSYLvAAAAA&pid=Api&P=0&h=180"
                      alt="Emily Brown"
                      style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <div style={{ marginLeft: '1rem' }}>
                      <Card.Title style={{
                        color: 'purple',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                      }}>
                        Emily Brown
                      </Card.Title>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem' }}>(5/5)</span>
                      </div>
                      <Card.Text style={{ fontSize: '14px', marginTop: '1rem' }}>
                        "The fragrance collection is heavenly! The scents last for hours and make me feel so confident throughout the day."
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
