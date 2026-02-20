import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer animate__animated animate__fadeInUp">
    <div className="footer-brand">
      <span className="logo-mark" aria-hidden="true"></span>
      <span>GG MACHINES &copy; 2026. Todos los derechos reservados.</span>
    </div>
    <div className="footer-social">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
    </div>
  </footer>
);

export default Footer;
