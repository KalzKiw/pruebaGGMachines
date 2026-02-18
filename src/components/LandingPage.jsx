import React, { useState, useEffect } from "react";
import { wixServices } from '../services/veloService';

export default function LandingPage() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
    loadCartCount();
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
    <div className="bg-black min-h-screen font-sans text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-sm"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm -ml-2"></div>
            <span className="ml-3 text-white font-bold text-sm tracking-wider">MINI PC'S IRELAND<br/>POWERED BY GG MACHINES</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors">SHOP</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">HOME</a>
            <div className="w-6 h-6 border border-white rounded-sm flex items-center justify-center relative cursor-pointer" onClick={handleCheckout}>
              <span className="text-xs">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-6 overflow-hidden">
        {/* Topographic background */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <path d="M0,100 Q200,80 400,100 T800,100" stroke="#333" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M0,200 Q200,180 400,200 T800,200" stroke="#333" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M0,300 Q200,280 400,300 T800,300" stroke="#333" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M0,400 Q200,380 400,400 T800,400" stroke="#333" strokeWidth="1" fill="none" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              <span className="text-green-400">TITANIC</span><br/>
              <span className="text-white">PERFORMANCE</span><br/>
              <span className="text-green-400">MICRO</span> <span className="text-white">FOOTPRINT.</span>
            </h1>
            <p className="text-gray-300 mb-8 text-lg max-w-lg">
              Crush heavy workloads, rendering, and AI tasks without the tower. Enterprise-grade power that fits in your hand.
            </p>
            <button className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center space-x-2">
              <span>EXPLORE MINI PCS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 flex justify-center items-center">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* AI Ready */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-gray-400 text-sm mb-2 tracking-wider">AI<br/>READY</div>
            <h3 className="text-5xl font-black mb-4">NPU 50<br/>TOPS</h3>
            <p className="text-gray-400">(Ryzen AI 9 HX<br/>370)</p>
          </div>
          
          {/* Core Performance */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <div className="text-gray-400 text-sm mb-2 tracking-wider">CORE<br/>PERFORMANCE</div>
            <h3 className="text-4xl font-bold mb-4">64GB DDR5 RAM & 1TB<br/>SSD GEN4</h3>
          </div>
          
          {/* Output Interface */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/30 border border-blue-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Engineering<br/>Expertise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Specialized in Custom Loops and AI Workstations. Our master technicians engineer liquid-cooled auto systems and high-density deep learning infrastructure with surgical precision for peak thermal performance.
            </p>
          </div>
          
          <div className="bg-gray-900/30 border border-blue-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">B2B &<br/>Education</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trusted partners for Schools and Esports Arenas. Large-scale deployment for educational institutions and professional competitive environments, backed by volume logistics and priority SLA.
            </p>
          </div>
          
          <div className="bg-gray-900/30 border border-gray-600/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-400">Human<br/>Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Honest advice, no upselling, and personalized service. Speak directly to specialists who understand performance metrics. We prioritize your specific workflow over profit margins, every time.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="w-80 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <div className="w-32 h-24 bg-gray-600 rounded-lg"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="text-gray-400 text-sm mb-2 tracking-wider">01</div>
              <h3 className="text-4xl font-bold mb-4">MORE PERFORMANCE, LESS<br/>VOLUME</h3>
              <p className="text-gray-300">
                Our Mini PCs condense the performance of an Intel Ultra or Ryzen AI tower into a chassis of less than 1 liter. Reduce energy consumption significantly without compromising power.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="text-gray-400 text-sm mb-2 tracking-wider">02</div>
              <h3 className="text-4xl font-bold mb-4">REAL ENERGY EFFICIENCY</h3>
              <p className="text-gray-300">
                Forget the myth that 'bigger is better.' Get workstation power with energy consumption optimized for businesses and creators seeking profitability.
              </p>
            </div>
            <div className="w-80 h-64 bg-gray-900/50 border border-gray-800 rounded-2xl"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="w-80 h-64 bg-gray-900/50 border border-gray-800 rounded-2xl"></div>
            </div>
            <div className="order-1 md:order-2">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16 tracking-wider">PRODUCT LINEUP</h2>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {loading ? (
              // Skeleton loading
              Array.from({length: 4}).map((_, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 animate-pulse">
                  <div className="w-full h-48 bg-gray-700 rounded-xl mb-6"></div>
                  <div className="h-6 bg-gray-700 rounded mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded mb-6"></div>
                  <div className="h-10 bg-gray-700 rounded"></div>
                </div>
              ))
            ) : (
              products.map((product, index) => (
                <div key={product.id || index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
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
                    <p className="text-green-400 text-xl font-bold mb-4">{product.price}</p>
                  )}
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleAddToCart(product.id)}
                      className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-lg font-bold transition-colors"
                    >
                      ADD TO CART
                    </button>
                    <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-medium hover:border-green-400 hover:text-green-400 transition-colors">
                      VIEW DETAILS
                    </button>
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
          
          <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
            {techProducts.map((product, index) => (
              <div key={index} className="flex-shrink-0">
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16">HIGH-DENSITY MINI PCS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">VAPOR CHAMBER<br/>COOLING TECH</h3>
                <p className="text-gray-300 text-sm">
                  Vapor Chamber Cooling state-of-the-art CPU architecture revolutionizes thermal dynamics for maximum performance and silence.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">HIGH-DENSITY<br/>MODULES</h3>
                <p className="text-gray-300 text-sm">
                  Revolutionary modular architecture. Our micro workstations deliver maximum compute density without heat buildup or fan noise.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4">ZERO CLUTTER<br/>DEPLOYMENT</h3>
              <p className="text-gray-300 text-sm">
                Hyper-compact 5G Oll Connectivity. Flawless container-based deployments for modern enterprise infrastructure and remote workstations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4">IRISH EXPERT<br/>ASSISTANCE</h3>
              <p className="text-gray-300 text-sm">
                Expert local consultation. Our Engineers assess your workflow before installation. Backed by pride in micro hardware engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-sm"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-sm -ml-2"></div>
              <span className="ml-3 text-white font-bold text-sm">GG MACHINES</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">EUROPE</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">USA</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">CONTACT</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">ORDERS</a>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            © 2024 GG MACHINES PRECISION INFRASTRUCTURE AND COOLING.
          </div>
        </div>
      </footer>
    </div>
  );
}
