import React from 'react';
import { useCart } from '../Cartcontex';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); 


  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.Price * product.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#D4BBDD', height: '100vh' }}>
      <h2 style={{ color: '#6A5ACD', marginBottom: '20px', textAlign: 'center' }}>Your Cart</h2>

      {cart.length === 0 ? ( 
        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: '#fff',
                marginBottom: '20px',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
            
              <img
                src={product.Images}  
                style={{
                  width: '120px',     
                  height: 'auto',     
                  borderRadius: '8px', 
                  marginRight: '20px',
                }}
              />

              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '5px' }}>{product.Brand}</h3>
                <p><strong>Type:</strong> {product.Type}</p>
                <p><strong>Price:</strong> ${product.Price}</p>
              </div>

             
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => decreaseQuantity(product.id)} 
                  style={styles.quantityButton}
                >
                  -
                </button>
                <span style={styles.quantityText}>{product.quantity}</span> 
                <button
                  onClick={() => increaseQuantity(product.id)} 
                  style={styles.quantityButton}
                >
                  +
                </button>
              </div>

           
              <button
                onClick={() => removeFromCart(product.id)}  
                style={styles.removeButton}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}

  
      <div style={{ textAlign: 'right', marginTop: '20px', fontWeight: 'bold' }}>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>


      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/dashboard" style={{ color: '#6A5ACD', fontSize: '1.8rem', textDecoration: 'none' }}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}


const styles = {
  quantityButton: {
    backgroundColor: '#6A5ACD',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '5px',
    margin: '0 10px',
    fontSize: '1.2rem',
  },
  quantityText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 10px',
  },
  removeButton: {
    backgroundColor: '#D9534F',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: '1rem',
  },
};

export default CartPage;
