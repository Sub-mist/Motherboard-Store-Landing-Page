import React, { useState } from 'react';
import { faqs } from '../../data/faqs';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-foreground rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-primary-gray transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-primary-gray">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="bg-background/80 dark:bg-background py-20 md:py-28">
      <div className="container mx-auto px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left reveal">
            <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-primary-gray mb-8">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
            <img
              src="/images/section-image/FAQ.jpg"
              alt="Illustration of people with question marks"
              className="rounded-lg mx-auto md:mx-0"
            />
          </div>
          <div className="space-y-4 reveal text-primary" style={{ transitionDelay: '200ms' }}>
            {faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;