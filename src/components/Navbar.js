import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => (
  <nav className="navbar sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="navbar-logo flex items-center gap-2">
        <Logo size="lg" />
      </div>

      {/* Nav Links */}
      <ul className="navbar-links hidden md:flex items-center gap-8">
        <li><a href="#home" className="text-gray-300 hover:text-fuchsia-400 transition-colors font-medium">Home</a></li>
        <li><a href="#features" className="text-gray-300 hover:text-fuchsia-400 transition-colors font-medium">Features</a></li>
        <li><a href="/products" className="text-gray-300 hover:text-fuchsia-400 transition-colors font-medium">Products</a></li>
        <li><a href="#services" className="text-gray-300 hover:text-fuchsia-400 transition-colors font-medium">Services</a></li>
        <li><a href="#contact" className="text-gray-300 hover:text-fuchsia-400 transition-colors font-medium">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
