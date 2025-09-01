import React from 'react';

const Navigation = () => {
  return (
    <header className="bg-layout/95 backdrop-blur-sm sticky top-0 z-50 border-b-0 border-layout transition-colors duration-300">
      <nav className="container mx-auto px-16 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4 md:space-x-8">
          <a href="#home" className="text-primary-gray hover:text-primary transition-colors">Home</a>
          <a href="#slots" className="text-primary-gray hover:text-primary transition-colors">Slots</a>
          <a href="#products" className="text-primary-gray hover:text-primary transition-colors">Products</a>
          <a href="#about" className="text-primary-gray hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-primary-gray hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-auto bg-background text-primary px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
          />
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-primary px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer">
            Search
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;