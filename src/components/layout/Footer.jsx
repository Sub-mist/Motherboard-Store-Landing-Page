import React from 'react';

const Footer = () => {
  const footerLinkClasses = "text-primary-gray hover:text-primary";

  return (
    <footer className="bg-layout/90 border-t border-layout">
      <div className="container mx-auto px-16 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="text-primary text-2xl font-bold flex items-center space-x-2">
              <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="17" x2="22" y2="17"></line><line x1="2" y1="7" x2="22" y2="7"></line><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line></svg>
              <span>MB-Store</span>
            </a>
            <p className="text-primary-gray mt-4">
              Your one-stop shop for high-performance motherboards.
            </p>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className={footerLinkClasses}>About Us</a></li>
              <li><a href="#" className={footerLinkClasses}>Brands</a></li>
              <li><a href="#" className={footerLinkClasses}>FAQ</a></li>
              <li><a href="#" className={footerLinkClasses}>Blog</a></li>
              <li><a href="#" className={footerLinkClasses}>Terms and Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className={footerLinkClasses}>My Account</a></li>
              <li><a href="#" className={footerLinkClasses}>Order History</a></li>
              <li><a href="#" className={footerLinkClasses}>Gaming Series</a></li>
              <li><a href="#" className={footerLinkClasses}>Creator Series</a></li>
              <li><a href="#" className={footerLinkClasses}>Workstation Series</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><a href="#" className={footerLinkClasses}>Privacy Policy</a></li>
              <li><a href="#" className={footerLinkClasses}>Refund Policy</a></li>
              <li><a href="#" className={footerLinkClasses}>Shipping Policy</a></li>
              <li><a href="#" className={footerLinkClasses}>Contact Us</a></li>
              <li><a href="#" className={footerLinkClasses}>Track Order</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-foreground pt-8 text-center text-primary-gray">
          <p>&copy; 2025 MB-Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;