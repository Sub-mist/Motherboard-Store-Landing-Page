import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Simple Steps to Your New Build</h2>
          <p className="text-primary-gray mb-12">
            Getting the right motherboard is easy. Follow our simple process to get your new PC up and running in no time.
          </p>
        </div>
        <div className="relative grid md:grid-cols-3 gap-8">

          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#FB4F14" className="dark:stroke-[#0E81B9]" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>
          <div className="relative text-center z-10 reveal">
            <div className="bg-background border-2 border-brand-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-accent text-3xl font-bold">1</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-2">Find Your Board</h3>
            <p className="text-primary-gray">
              Use our filters and guides to search for the perfect motherboard that fits your CPU and performance needs.
            </p>
          </div>
          <div className=" relative text-center z-10 reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-brand-light border-2 border-brand-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-accent text-3xl font-bold">2</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-2">Secure Checkout</h3>
            <p className="text-primary-gray">
              Add your chosen components to the cart and complete your purchase through our secure payment gateway.
            </p>
          </div>
          <div className="relative text-center z-10 reveal" style={{ transitionDelay: '400ms' }}>
            <div className="bg-background border-2 border-brand-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-brand-accent text-3xl font-bold">3</span>
            </div>
            <h3 className="text-primary text-xl font-bold mb-2">Build & Enjoy</h3>
            <p className="text-primary-gray">
              Receive your parts with fast shipping, assemble your new PC, and experience the power and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;