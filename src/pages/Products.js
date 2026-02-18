import React from 'react';
import 'animate-ui/dist/animate.min.css';

const products = [
  {
    name: 'GMKtec EVO-T1',
    desc: 'Intel Ultra 9, 64GB RAM',
    img: '/assets/prod1.png',
    details: 'Maximum performance for professional workflows and intensive rendering tasks.'
  },
  {
    name: 'GMKtec EVO-X1',
    desc: 'Ryzen AI 9, AI-ready NPU',
    img: '/assets/prod2.png',
    details: 'Optimized with dedicated NPU for advanced AI workflow acceleration.'
  },
  {
    name: 'MinisForum UM870 Plus',
    desc: 'Ryzen 7, up to 3x 4K displays',
    img: '/assets/prod3.png',
    details: 'Extreme versatility for workstations with multi-monitor configurations.'
  },
  {
    name: 'GMKtec K6',
    desc: 'Ryzen 7 7840HS, office-ready',
    img: '/assets/prod4.png',
    details: 'The ultimate power efficiency solution for modern office environments.'
  }
];

const Products = () => (
  <section id="products" className="section animate__animated animate__fadeInUp" style={{background: '#0a0a0a'}}>
    <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '40px'}}>PRODUCT LINEUP</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px'}}>
      {products.map((prod, idx) => (
        <div key={idx} style={{background: '#181818', borderRadius: '16px', padding: '24px', minWidth: '260px', maxWidth: '300px', flex: '1 1 260px', textAlign: 'center', boxShadow: '0 2px 16px #0006'}}>
          <img src={prod.img} alt={prod.name} style={{width: '100%', borderRadius: '12px', marginBottom: '18px'}} />
          <h3 style={{color: '#fff'}}>{prod.name}</h3>
          <p style={{color: '#7fff00', fontWeight: 700}}>{prod.desc}</p>
          <p style={{color: '#ccc'}}>{prod.details}</p>
          <a href="#" style={{display: 'inline-block', marginTop: '10px', border: '1px solid #7fff00', color: '#7fff00', padding: '8px 20px', borderRadius: '20px', fontWeight: 700}}>VIEW DETAILS</a>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
