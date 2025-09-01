import React from 'react';
import Button from '../ui/Button';
import Particles from '../ui/Particles';

const Hero = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      
      <Particles total={50} className="bg-orange-700 dark:bg-primary" />

      <div className="absolute inset-0 bg-background/80 z-10"></div>
      
      <div className="container relative z-20 mx-auto px-16 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left reveal">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-primary">
              Find Your Perfect Motherboard
            </h1>
            <p className="text-lg text-primary-gray mb-8">
              Explore high-quality motherboards and learn about every slot in detail — from CPU to PCIe.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button href="#products" variant="primary">
                Shop Now
              </Button>
              <Button href="#about" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <img
              src="images/section-image/Gen.jpg"
              alt="A high-tech motherboard with glowing components"
              className="rounded-xl shadow-2xl shadow-brand-accent/20 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;