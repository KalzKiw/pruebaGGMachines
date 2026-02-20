
import React, { useEffect, useState } from 'react';
import { wixServices } from '../services/veloService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map products to their images (served from public/)
  const productImages = {
    'GMKtec EVO-T1': '/GMKTEC EVO-T1.avif',
    'GMKtec EVO-X1': '/GMKtec EVO-X1-.avif',
    'MinisForum UM870 Plus': '/MinisForum UM870 Plus.avif',
    'GMKtec K6': '/GMKtec K6.avif'
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

  return (
    <section id="products" className="py-32 px-6" style={{background: 'transparent'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-white">PRODUCT LINEUP</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {loading ? (
            <div className="text-white col-span-4 text-center">Loading products...</div>
          ) : (
            products.map((prod, idx) => (
              <div key={prod.id || idx} className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-white/5 hover:border-white/20 transition-all duration-500">
                {prod.image ? (
                  <img src={prod.image} alt={prod.model || prod.name} className="w-full h-48 object-cover rounded-lg mb-6" />
                ) : (
                  <div className="h-48 rounded-lg mb-6 bg-gray-800 flex items-center justify-center text-gray-500 font-semibold">PC IMAGE</div>
                )}
                <h3 className="text-white font-bold mb-2 text-lg">{prod.model || prod.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{prod.specs || prod.desc}</p>
                <p className="text-gray-500 text-xs mb-4">{prod.description || prod.details}</p>
                {prod.price && <p className="text-white font-semibold mb-4">{prod.price}</p>}
                <a href={`/product/${prod.id}`} target="_blank" rel="noreferrer" className="inline-block w-full text-center border border-white/20 text-white hover:bg-white/10 py-2 rounded-lg font-bold transition-colors">VIEW PC</a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
