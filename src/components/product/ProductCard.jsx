import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div
      className="bg-brand-card rounded-xl overflow-hidden shadow-lg reveal"
      style={{ transitionDelay: product.delay }}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-brand-accent">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-brand-accent hover:bg-brand-accent-hover text-primary font-semibold py-2 px-4 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    delay: PropTypes.string,
  }).isRequired,
};

export default ProductCard;