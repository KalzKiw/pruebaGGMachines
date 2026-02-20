

import React, { useState, useEffect } from "react";
import { wixServices } from '../services/veloService';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LandingPage() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    loadProducts();
    loadCartCount();
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const loadProducts = async () => {
    try {
      const wixProducts = await wixServices.getProducts();
      setProducts(wixProducts);
    } catch (error) {
      console.error('Error loading products:', error);
      // Fallback a productos de ejemplo si falla Wix
      setProducts([
        {
          id: 1,
          model: "GMKtec EVO-T1",
          description: "Maximum performance for professional workflow applications and GraphQL tasks.",
          specs: "Intel Ultra 9, 64GB RAM",
          price: "$2,499",
          image: ""
        },
        {
          id: 2,
          model: "GMKtec EVO-X1",
          description: "Optimized with dedicated NPU for enhanced AI workflow acceleration.",
          specs: "Ryzen AI 9, AI-ready NPU",
          price: "$1,799",
          image: ""
        },
        {
          id: 3,
          model: "MinisForum UM870 Plus",
          description: "Extreme versatility for workstations with multi-monitor configurations.",
          specs: "Ryzen 7 up to 3x 4K displays",
          price: "$1,299",
          image: ""
        },
        {
          id: 4,
          model: "GMKtec K6",
          description: "The ultimate power efficiency solution for modern office environments.",
          specs: "Ryzen 7 7840HS, office-ready",
          price: "$999",
          image: ""
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const loadCartCount = async () => {
    try {
      const cart = await wixServices.getCurrentCart();
      setCartCount(cart?.lineItems?.length || 0);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      await wixServices.addToCart(productId);
      loadCartCount(); // Actualizar contador
      alert('Producto agregado al carrito!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error al agregar al carrito');
    }
  };

  const handleCheckout = async () => {
    try {
      const checkoutId = await wixServices.createCheckout();
      if (checkoutId) {
        await wixServices.redirectToCheckout(checkoutId);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error al proceder al pago');
    }
  };

const techProducts = [
  { name: "New Arrival", image: "" },
  { name: "Pro Model", image: "" },
  { name: "New AI Unit", image: "" },
  { name: "New AI Unit", image: "" },
  { name: "New Arrival", image: "" }
];
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 min-h-screen font-sans text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-6 overflow-hidden" data-aos="fade-up">
        <div className="hero-lines">
          <span className="hero-line" style={{ top: '12%' }}></span>
          <span className="hero-line" style={{ top: '24%' }}></span>
          <span className="hero-line" style={{ top: '36%' }}></span>
          <span className="hero-line" style={{ top: '52%' }}></span>
          <span className="hero-line" style={{ top: '68%' }}></span>
          <span className="hero-line" style={{ top: '84%' }}></span>
        </div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <div className="flex-1 max-w-2xl" data-aos="fade-right">
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              <span className="text-fuchsia-400">TITANIC</span><br/>
              <span className="text-white">PERFORMANCE</span><br/>
              <span className="text-fuchsia-400">MICRO</span> <span className="text-white">FOOTPRINT.</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg max-w-lg">
              Crush heavy workloads, rendering, and AI tasks without the tower. Enterprise-grade power that fits in your hand.
            </p>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center space-x-2">
              <span>EXPLORE MINI PCS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 flex justify-center items-center" data-aos="fade-left">
            <div className="relative">
              <img src="" alt="Mini PC Setup" className="w-96 h-96 object-contain" />
              {/* Placeholder for mini PC images */}
              <div className="w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <div className="w-32 h-20 bg-gray-700 rounded-lg mb-4 mx-auto"></div>
                  <div className="w-20 h-16 bg-gray-600 rounded-lg mx-auto"></div>
                  <p className="text-gray-400 mt-4">Mini PC Setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* AI Ready */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-500" data-aos="zoom-in">
            <div className="text-gray-400 text-sm mb-2 tracking-wider">AI<br/>READY</div>
            <h3 className="text-5xl font-black mb-4">NPU 50<br/>TOPS</h3>
            <p className="text-gray-400">(Ryzen AI 9 HX<br/>370)</p>
          </div>
          
          {/* Core Performance */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-500" data-aos="zoom-in" data-aos-delay="100">
            <div className="text-gray-400 text-sm mb-2 tracking-wider">CORE<br/>PERFORMANCE</div>
            <h3 className="text-4xl font-bold mb-4">64GB DDR5 RAM & 1TB<br/>SSD GEN4</h3>
          </div>
          
          {/* Output Interface */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-500" data-aos="zoom-in" data-aos-delay="200">
            <div className="text-gray-400 text-sm mb-2 tracking-wider">OUTPUT INTERFACE</div>
            <div className="space-y-2">
              <p className="font-semibold">Quad-Display<br/>Support</p>
              <p className="text-gray-400 text-sm">HDMI 2.1 +<br/>USB4</p>
            </div>
          </div>
        </div>
        
        {/* Brand Section */}
        <div className="text-center mt-16">
          <div className="text-gray-500 text-sm tracking-[0.3em] mb-4">MINI PC'S IRELAND</div>
          <div className="text-gray-500 text-xs tracking-[0.2em]">POWERED BY GG<br/>MACHINES</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/30 border border-blue-800/50 rounded-2xl p-8 shadow-md hover:scale-105 transition-transform duration-500" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4">Engineering<br/>Expertise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Specialized in Custom Loops and AI Workstations. Our master technicians engineer liquid-cooled auto systems and high-density deep learning infrastructure with surgical precision for peak thermal performance.
            </p>
          </div>
          
          <div className="bg-gray-900/30 border border-blue-800/50 rounded-2xl p-8 shadow-md hover:scale-105 transition-transform duration-500" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-bold mb-4">B2B &<br/>Education</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trusted partners for Schools and Esports Arenas. Large-scale deployment for educational institutions and professional competitive environments, backed by volume logistics and priority SLA.
            </p>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-600/50 rounded-2xl p-8 shadow-md hover:scale-105 transition-transform duration-500" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold mb-4 text-gray-400">Human<br/>Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Honest advice, no upselling, and personalized service. Speak directly to specialists who understand performance metrics. We prioritize your specific workflow over profit margins, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <div className="w-80 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="w-32 h-24 bg-gray-600 rounded-lg"></div>
              </div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <div className="text-gray-400 text-sm mb-2 tracking-wider">01</div>
              <h3 className="text-4xl font-bold mb-4">MORE PERFORMANCE, LESS<br/>VOLUME</h3>
              <p className="text-gray-300">
                Our Mini PCs condense the performance of an Intel Ultra or Ryzen AI tower into a chassis of less than 1 liter. Reduce energy consumption significantly without compromising power.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div data-aos="fade-right">
              <div className="text-gray-400 text-sm mb-2 tracking-wider">02</div>
              <h3 className="text-4xl font-bold mb-4">REAL ENERGY EFFICIENCY</h3>
              <p className="text-gray-300">
                Forget the myth that 'bigger is better.' Get workstation power with energy consumption optimized for businesses and creators seeking profitability.
              </p>
            </div>
            <div className="w-80 h-64 bg-gray-900/50 border border-gray-800 rounded-2xl" data-aos="fade-left"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <div className="w-80 h-64 bg-gray-900/50 border border-gray-800 rounded-2xl"></div>
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <div className="text-gray-400 text-sm mb-2 tracking-wider">03</div>
              <h3 className="text-4xl font-bold mb-4">FRICTIONLESS IT</h3>
              <p className="text-gray-300">
                Simplify IT maintenance and reclaim your desk space. Less hardware means more agile and efficient fleet management for business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 tracking-wider">PRODUCT LINEUP</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {loading ? (
              // Skeleton loading
              Array.from({length: 4}).map((_, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 animate-pulse shadow-lg" data-aos="zoom-in">
                  <div className="w-full h-48 bg-gray-700 rounded-xl mb-6"></div>
                  <div className="h-6 bg-gray-700 rounded mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded mb-6"></div>
                  <div className="h-10 bg-gray-700 rounded"></div>
                </div>
              ))
            ) : (
              products.map((product, index) => (
                <div key={product.id || index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-500" data-aos="zoom-in">
                  <div className="w-full h-48 bg-gray-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <img src={product.image} alt={product.model} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-24 h-16 bg-gray-600 rounded"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{product.model}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <p className="text-white font-semibold mb-4">{product.specs}</p>
                  {product.price && (
                    <p className="text-fuchsia-400 text-xl font-bold mb-4">{product.price}</p>
                  )}
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full bg-fuchsia-500 hover:bg-fuchsia-400 text-black py-3 rounded-lg font-bold transition-colors"
                    >
                      ADD TO CART
                    </button>
                    <a
                      href={`/product/${product.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-medium hover:border-fuchsia-400 hover:text-fuchsia-400 transition-colors flex items-center justify-center"
                    >
                      VIEW PC
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* Precision Engineering Section */}
          <div className="text-center mb-12">
            <div className="text-gray-400 text-sm tracking-wider mb-4">THE HIGH-TICKET SELECTION</div>
            <h3 className="text-5xl font-black mb-12">PRECISION ENGINEERED HARDWARE</h3>
          </div>
          
          <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4" data-aos="fade-up">
            {techProducts.map((product, index) => (
              <div key={index} className="flex-shrink-0 hover:scale-105 transition-transform duration-500" data-aos="zoom-in">
                <div className="w-48 h-36 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-20 h-12 bg-gray-600 rounded"></div>
                </div>
                <div className="text-center">
                  <span className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                    {product.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16">HIGH-DENSITY MINI PCS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-8 relative overflow-hidden shadow-lg" data-aos="fade-right">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">VAPOR CHAMBER<br/>COOLING TECH</h3>
                <p className="text-gray-300 text-sm">
                  Vapor Chamber Cooling state-of-the-art CPU architecture revolutionizes thermal dynamics for maximum performance and silence.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 relative overflow-hidden shadow-lg" data-aos="fade-left">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">HIGH-DENSITY<br/>MODULES</h3>
                <p className="text-gray-300 text-sm">
                  Revolutionary modular architecture. Our micro workstations deliver maximum compute density without heat buildup or fan noise.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 shadow-lg" data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-4">ZERO CLUTTER<br/>DEPLOYMENT</h3>
              <p className="text-gray-300 text-sm">
                Hyper-compact 5G Oll Connectivity. Flawless container-based deployments for modern enterprise infrastructure and remote workstations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 shadow-lg" data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-4">IRISH EXPERT<br/>ASSISTANCE</h3>
              <p className="text-gray-300 text-sm">
                Expert local consultation. Our Engineers assess your workflow before installation. Backed by pride in micro hardware engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
