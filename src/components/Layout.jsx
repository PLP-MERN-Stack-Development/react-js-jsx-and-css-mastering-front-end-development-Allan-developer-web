import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, navLinks = [], footerLinks = [], brand }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar brand={brand} links={navLinks} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer links={footerLinks} />
    </div>
  );
};

export default Layout;