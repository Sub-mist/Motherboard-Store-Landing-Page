import React, { createContext, useContext, useState, useMemo } from 'react';
import { useNotification } from './NotificationContext';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { showNotification } = useNotification();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);


  const addToCart = (product) => {
    let itemWasAdded = false;
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      itemWasAdded = true;
      return [...prevItems, { ...product, quantity: 1 }];
    });

    if (itemWasAdded) {
      showNotification(`'${product.name}' was added to your cart!`);
    } else {
      showNotification(`Increased '${product.name}' quantity.`);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === productId) {
          return item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : null;
        }
        return item;
      }).filter(Boolean)
    );
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  const value = {
    cartItems,
    isCartOpen,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};