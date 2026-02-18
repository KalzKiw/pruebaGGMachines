import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar animate__animated animate__fadeInDown">
    <div className="navbar-logo">GG MACHINES</div>
    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#features">Características</a></li>
      <li><a href="#products">Productos</a></li>
      <li><a href="#services">Servicios</a></li>
      <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
);

export default Navbar;
