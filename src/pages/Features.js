import React from 'react';
import 'animate-ui/dist/animate.min.css';

const Features = () => (
  <section id="features" className="section animate__animated animate__fadeInUp" style={{background: '#111'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1100px', margin: '0 auto'}}>
      <div style={{flex: '1 1 300px', background: '#181818', borderRadius: '16px', padding: '32px', minWidth: '260px'}}>
        <h2 style={{color: '#fff'}}>AI READY</h2>
        <h3 style={{color: '#ff4ecd'}}>NPU 50 TOPS</h3>
        <p style={{color: '#ccc'}}>Ryzen AI 9 HX 370</p>
      </div>
      <div style={{flex: '1 1 300px', background: '#181818', borderRadius: '16px', padding: '32px', minWidth: '260px'}}>
        <h2 style={{color: '#fff'}}>CORE PERFORMANCE</h2>
        <h3 style={{color: '#ff4ecd'}}>64GB DDR5 RAM & 1TB SSD GEN4</h3>
      </div>
      <div style={{flex: '1 1 300px', background: '#181818', borderRadius: '16px', padding: '32px', minWidth: '260px'}}>
        <h2 style={{color: '#fff'}}>OUTPUT INTERFACE</h2>
        <h3 style={{color: '#ff4ecd'}}>Quad-Display Support</h3>
        <p style={{color: '#ccc'}}>HDMI 2.1 + USB4</p>
      </div>
    </div>
  </section>
);

export default Features;
