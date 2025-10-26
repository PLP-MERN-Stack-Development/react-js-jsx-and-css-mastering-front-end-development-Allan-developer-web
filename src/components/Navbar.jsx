import React from 'react';

const Navbar = ({ brand = 'My App', links = [] }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">{brand}</div>
        <div className="space-x-6 flex items-center">
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
      </div>
    </nav>
  );
};

export default Navbar;