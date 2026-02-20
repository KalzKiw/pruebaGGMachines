import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 mb-12 items-center">
        {/* Logo Left */}
        <div className="flex flex-col items-start justify-center">
          <Logo size="xl" />
        </div>

        {/* Quick Links Center */}
        <div className="flex flex-col items-center justify-center h-full">
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-center">
            <li><a href="#home" className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">Home</a></li>
            <li><a href="/products" className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">Products</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">Services</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-fuchsia-400 transition-colors text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Right */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-400">info@ggmachines.ie</li>
            <li className="text-gray-400">+353 1 XXXX XXXX</li>
            <li className="text-gray-400">Dublin, Ireland</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">© 2026 GG MACHINES. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20v-7.21H5.33V9.25h2.96V7.02c0-2.92 1.77-4.51 4.39-4.51 1.25 0 2.32.09 2.63.13v3.05h-1.81c-1.41 0-1.69.67-1.69 1.66V9.25h3.37l-.44 3.54h-2.93V20h-2.83z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.206 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.945v5.422h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.198-1.608 2.971-1.608 2.172 0 3.802 1.421 3.802 4.475v5.415zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.953.765-1.71 1.959-1.71 1.188 0 1.912.757 1.937 1.71 0 .951-.749 1.71-1.981 1.71zm1.581 11.597H3.715V9.806h3.203v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
