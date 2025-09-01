import React from 'react';

const FeatureTag = ({ icon, title, delay = '0ms' }) => {
  return (
    <div
      className="bg-brand-card p-6 rounded-lg shadow-md reveal"
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center justify-center space-x-3">
        {icon}
        <span className="text-xl font-semibold">{title}</span>
      </div>
    </div>
  );
};

export default FeatureTag;