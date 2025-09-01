import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../contexts/CartContext';

const CartItem = ({ item, decreaseQuantity, addToCart, removeFromCart }) => (
  <div className="flex items-center space-x-4">
    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
    <div className="flex-1">
      <h3 className="font-bold">{item.name}</h3>
      <p className="text-primary-gray">${item.price}</p>
      <div className="flex items-center space-x-2 mt-2">
        <button aria-label={`Decrease quantity of ${item.name}`} onClick={() => decreaseQuantity(item.id)} className="px-2 py-0.5 border rounded-md cursor-pointer">-</button>
        <span>{item.quantity}</span>
        <button aria-label={`Increase quantity of ${item.name}`} onClick={() => addToCart(item)} className="px-2 py-0.5 border rounded-md cursor-pointer">+</button>
      </div>
    </div>
    <button aria-label={`Remove ${item.name} from cart`} onClick={() => removeFromCart(item.id)} className="cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
    </button>
  </div>
);

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const CartModal = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal, removeFromCart, addToCart, decreaseQuantity } = useCart();

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[100] flex justify-end"
      onClick={closeCart}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-heading"
    >
      <div
        className="w-full max-w-lg h-full bg-background text-primary flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-background/90">
          <h2 id="cart-heading" className="text-2xl font-bold">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-2 rounded-full hover:bg-background/90 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center h-full flex flex-col justify-center items-center">
              <p className="text-primary-gray mb-4">Your cart is empty.</p>
              <button onClick={closeCart} className="bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold py-2 px-4 rounded-lg cursor-pointer">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} {...{ decreaseQuantity, addToCart, removeFromCart }} />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-background/90 space-y-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <button className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold py-3 rounded-lg cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;