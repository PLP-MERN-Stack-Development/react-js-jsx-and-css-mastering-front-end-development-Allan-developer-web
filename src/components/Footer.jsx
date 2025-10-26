import React from 'react';

const Footer = ({ links = [], copyrightText = '© 2025 My App. All rights reserved.' }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-6 mb-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-center text-gray-400">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;