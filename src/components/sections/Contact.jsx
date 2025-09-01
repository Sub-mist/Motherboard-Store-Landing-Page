import React from 'react';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    alert("Thank you for your message! We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-16">
        <div className="text-center max-w-3xl mx-auto reveal">
          <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-primary-gray mb-12">
            Whether you have a question about a product, need support, or just want to say hello, we'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 bg-background/80 dark:bg-background p-8 rounded-xl reveal max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  className="text-primary-gray mt-1 block w-full bg-brand-card/70 dark:bg-brand-card/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  placeholder="Ken Kenaki"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  className="text-primary-gray mt-1 block w-full bg-brand-card/70 dark:bg-brand-card/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  placeholder="oneyeghoul@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="contact-address" className="block text-sm font-medium text-primary">
                  Address (Optional)
                </label>
                <textarea
                  id="contact-address"
                  rows="3"
                  className="text-primary-gray mt-1 block w-full bg-brand-card/70 dark:bg-brand-card/10 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-brand-accent transition-colors"
                  placeholder="Block-X, Hyderabad, India"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-primary font-semibold py-3 rounded-lg transition-colors cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-primary text-xl font-bold">Main Office</h3>
              <p className="text-primary-gray mt-2">
                Hyderabad, India
              </p>
              <p className="text-primary-gray">
                Phone: (+91) XXX-XXX-XXXX
              </p>
              <p className="text-primary-gray">
                Email: office@mbstore.com
              </p>
            </div>
            <div>
              <h3 className="text-primary text-xl font-bold">Customer Support</h3>
              <p className="text-primary-gray mt-2">
                Available 9am - 5pm PST, Mon-Fri
              </p>
              <p className="text-primary-gray">
                Phone: (+91) XXX-XXX-XXXX
              </p>
              <p className="text-primary-gray">
                Email: support@mbstore.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;