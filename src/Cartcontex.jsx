import React, { createContext, useState, useContext } from 'react';

// Create Cart Context
const CartContext = createContext();

// CartProvider component to wrap the application with context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);  // cart stores an array of products

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product already exists in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product exists, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }  // Increase quantity
            : item
        );
      } else {
        // If the product doesn't exist, add it to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove product from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to increase the quantity of a product
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrease the quantity of a product
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1  // Prevent quantity from going below 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
