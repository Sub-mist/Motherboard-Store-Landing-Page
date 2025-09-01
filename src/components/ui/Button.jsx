import React from 'react';

const Button = ({ href, variant = 'primary', children, ...props }) => {
  const baseClasses =
    'font-semibold px-6 py-3 rounded-lg transition-transform transform hover:scale-105 cursor-pointer';

  const variantClasses = {
    primary: 'bg-brand-accent hover:bg-brand-accent-hover text-white dark:text-black',
    secondary:
      'bg-brand-accent hover:bg-brand-accent-hover dark:bg-gray-700 dark:hover:bg-gray-800 text-primary',
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;