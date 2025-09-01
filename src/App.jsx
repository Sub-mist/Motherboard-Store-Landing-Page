import React from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import About from './components/sections/About';
import Slots from './components/sections/Slots';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import CartModal from './components/cart/CartModal';
import Notification from './components/ui/Notification';

function App() {
  useScrollAnimation();

  return (
    <>
      <CartModal />
      <Header />
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <Slots />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Notification />
    </>
  );
}

export default App;