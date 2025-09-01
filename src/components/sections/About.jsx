import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <img
              src="images/section-image/Overview.jpg"
              alt="Motherboard Overview Diagram"
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="text-center md:text-left reveal" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">What is a Motherboard?</h2>
            <p className="text-primary-gray leading-relaxed">
              The motherboard is the backbone of your computer. It connects all critical components like the CPU, memory, storage, and expansion cards, enabling them to communicate efficiently.
            </p>
            <p className="text-primary-gray leading-relaxed mt-4">
              Each slot and connector has a specific role, from powering the system to adding GPUs or fast SSDs. Understanding them helps you choose the right motherboard for your build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;