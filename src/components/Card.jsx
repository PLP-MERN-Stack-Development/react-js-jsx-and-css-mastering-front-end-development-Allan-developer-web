// src/components/Card.jsx
import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
