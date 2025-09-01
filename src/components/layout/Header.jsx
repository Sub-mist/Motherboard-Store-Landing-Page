import React from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import CartButton from '../ui/CartButton';

const Header = () => {
  return (
    <header className="bg-layout border-b-0 border-layout w-full z-[100] transition-colors duration-300">
      <nav className="container mx-auto px-16 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="17" x2="22" y2="17"></line><line x1="2" y1="7" x2="22" y2="7"></line><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line></svg>
          <span>MB-Store</span>
        </a>
        <div className="flex items-center space-x-4">
          <button className="bg-background text-primary-gray px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            Login
          </button>
          <CartButton />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;