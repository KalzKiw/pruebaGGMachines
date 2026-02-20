
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { wixServices } from '../services/veloService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map products to their images (served from public/)
  const productImages = {
    'GMKtec EVO-T1': require('../assets/GMKTEC EVO-T1.avif'),
    'GMKtec EVO-X1': require('../assets/GMKtec EVO-X1-.avif'),
    'MinisForum UM870 Plus': require('../assets/MinisForum UM870 Plus.avif'),
    'GMKtec K6': require('../assets/GMKtec K6.avif')
  };

  useEffect(() => {
    wixServices.getProducts().then(data => {
      // Add images to products
      const productsWithImages = data.map(prod => ({
        ...prod,
        image: productImages[prod.model] || null
      }));
      setProducts(productsWithImages);
      setLoading(false);
    });
  }, []);

  // Estado para el acordeón de cada producto
  const [openAccordion, setOpenAccordion] = useState({});

  const toggleAccordion = (prodId, section) => {
    setOpenAccordion(prev => ({
      ...prev,
      [prodId]: prev[prodId] === section ? null : section
    }));
  };

  return (
    <section id="products" className="py-32 px-6" style={{background: 'transparent'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-white">PRODUCT LINEUP</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {loading ? (
            <div className="text-white col-span-4 text-center">Loading products...</div>
          ) : (
            products.map((prod, idx) => (
              <div key={prod.id || idx} className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between h-full">
                <div>
                  {((prod.image && typeof prod.image === 'string' && prod.image.trim() !== '') || productImages[prod.model]) ? (
                    <img
                      src={prod.image && prod.image.trim() !== '' ? prod.image : productImages[prod.model]}
                      alt={prod.model || prod.name}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                  ) : (
                    <div className="h-48 rounded-lg mb-6 bg-gray-800 flex items-center justify-center text-gray-500 font-semibold">PC IMAGE</div>
                  )}
                  <h3 className="text-white font-bold mb-2 text-lg">{prod.model || prod.name}</h3>
                  {prod.price && <p className="text-white font-semibold mb-4">{prod.price}</p>}
                  {/* Acordeón custom */}
                  <div className="mb-4 divide-y divide-white/10">
                    {[
                      { key: 'desc', label: 'Product Description', content: prod.description || prod.details || 'No description available.' },
                      { key: 'returns', label: 'Returns & Refund Policy', content: prod.returns || '30-day return policy on all products.' },
                      { key: 'shipping', label: 'Shipping Info', content: prod.shipping || 'Fast, insured shipping with tracking. Delivery times vary by region.' },
                      { key: 'specs', label: 'Specifications', content: prod.specs || prod.desc || 'No specifications available.' }
                    ].map(section => (
                      <div key={section.key}>
                        <button
                          className="w-full flex items-center justify-between py-3 font-bold text-left text-white focus:outline-none transition-colors hover:text-fuchsia-400"
                          onClick={() => toggleAccordion(prod.id, section.key)}
                          aria-expanded={openAccordion[prod.id] === section.key}
                          aria-controls={`panel-${prod.id}-${section.key}`}
                        >
                          <span>{section.label}</span>
                          <span className={`transform transition-transform duration-300 ${openAccordion[prod.id] === section.key ? 'rotate-90 text-fuchsia-400' : 'rotate-0 text-gray-400'}`}>▶</span>
                        </button>
                        <div
                          id={`panel-${prod.id}-${section.key}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion[prod.id] === section.key ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                          style={{}}
                        >
                          <div className="text-gray-400 text-sm">
                            {section.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <button className="w-full text-center bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-2 rounded-lg font-bold transition-colors">ADD TO CART</button>
                  <Link to={`/product/${prod.id}`} className="w-full text-center border border-white/20 text-white hover:bg-white/10 py-2 rounded-lg font-bold transition-colors">VIEW PC</Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
