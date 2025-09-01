import React from 'react';
import { useCart } from '../../contexts/CartContext';

const CartButton = () => {
  const { cartCount, openCart } = useCart(); 

  return (
    <button
      onClick={openCart}
      className="relative bg-background text-primary-gray px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 dark:hover:bg-gray-700 transition-colors cursor-pointer"
    >
      <span>Cart</span>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;