import React from 'react';
import { slots } from '../../data/slots.jsx';

const SlotCard = ({ slot }) => (
  <div
    className="bg-brand-card p-8 rounded-xl text-left reveal"
    style={{ transitionDelay: slot.delay }}
  >
    <div className="bg-brand-accent/10 text-brand-accent p-3 rounded-lg inline-block mb-4">
      {slot.icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{slot.title}</h3>
    <p className="text-gray-light">
      {slot.description}
    </p>
  </div>
);

const Slots = () => {
  return (
    <section id="slots" className="bg-background/80 dark:bg-background py-20 md:py-28">
      <div className="container mx-auto px-16">
        <div className="text-center max-w-3xl mx-auto reveal">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Know Your Slots</h2>
          <p className="text-primary-gray text-gray-light mb-12">
            Understanding the key slots on a motherboard is the first step to building a powerful and compatible PC.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slots.map((slot) => (
            <SlotCard key={slot.id} slot={slot} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slots;