import React from 'react';
import FeatureTag from '../product/FeatureTag';

const Features = () => {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FeatureTag
            title="Free Shipping"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            }
          />
          <FeatureTag
            title="Fast Delivery"
            delay="150ms"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.9a2 2 0 0 0 1.66-.9l.82-1.2A2 2 0 0 1 10.3 3h3.4a2 2 0 0 1 1.66.9l.82 1.2c.73.74 1.7.9 2.58.9H21a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
                <circle cx="7" cy="18" r="2" />
                <path d="M15 18H9" />
                <circle cx="17" cy="18" r="2" />
              </svg>
            }
          />
          <FeatureTag
            title="Customer Support"
            delay="300ms"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M10 16L12 18L15 15" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;