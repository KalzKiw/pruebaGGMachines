
import React, { useEffect, useState } from 'react';
import { wixServices } from '../services/veloService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wixServices.getProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="products" className="section animate__animated animate__fadeInUp" style={{background: 'transparent'}}>
      <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '40px'}}>PRODUCT LINEUP</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px'}}>
        {loading ? (
          <div style={{color:'#fff'}}>Loading products...</div>
        ) : (
          products.map((prod, idx) => (
            <div key={prod.id || idx} style={{background: '#181818', borderRadius: '16px', padding: '24px', minWidth: '260px', maxWidth: '300px', flex: '1 1 260px', textAlign: 'center', boxShadow: '0 2px 16px #0006'}}>
              {prod.image ? (
                <img src={prod.image} alt={prod.model || prod.name} style={{width: '100%', borderRadius: '12px', marginBottom: '18px'}} />
              ) : (
                <div style={{height: '180px', borderRadius: '12px', marginBottom: '18px', background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', fontWeight: 700}}>PC IMAGE</div>
              )}
              <h3 style={{color: '#fff'}}>{prod.model || prod.name}</h3>
              <p style={{color: '#ff4ecd', fontWeight: 700}}>{prod.specs || prod.desc}</p>
              <p style={{color: '#ccc'}}>{prod.description || prod.details}</p>
              <a href={`/product/${prod.id}`} target="_blank" rel="noreferrer" style={{display: 'inline-block', marginTop: '10px', border: '1px solid #ff4ecd', color: '#ff4ecd', padding: '8px 20px', borderRadius: '20px', fontWeight: 700}}>VIEW PC</a>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
