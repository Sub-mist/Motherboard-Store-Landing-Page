import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';
import Button from '../ui/Button';

const Products = () => {
  return (
    <section id="products" className="bg-background/80 dark:bg-background py-20 md:py-28">
      <div className="container mx-auto px-16 text-center">
        <div className="reveal">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Our Latest Motherboards</h2>
          <p className="text-primary-gray max-w-2xl mx-auto mb-12">
            Explore a curated selection of our top-rated motherboards, perfect for your next build.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center reveal" style={{ transitionDelay: '600ms' }}>
          <Button href="#" variant="secondary">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;