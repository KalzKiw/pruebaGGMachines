import React from 'react';
import 'animate-ui/dist/animate.min.css';
import placeholderImage from '../assets/GMKTEC EVO-T1.avif';

const Home = () => (
  <section id="home" className="section animate__animated animate__fadeIn">
    <div style={{maxWidth: '900px', margin: '0 auto', textAlign: 'center', paddingTop: '100px'}}>
      <h1 style={{fontSize: '3rem', color: '#ff4ecd'}}>
        TITANIC <span style={{color: '#fff'}}>PERFORMANCE</span><br/>
        MICRO <span style={{color: '#fff'}}>FOOTPRINT.</span>
      </h1>
      <p style={{margin: '20px 0 30px 0', color: '#ccc', fontSize: '1.2rem'}}>
        Crush heavy workloads, rendering, and AI tasks without the tower. Enterprise-grade power that fits in your hand.
      </p>
      <a href="#products" style={{background: '#ff4ecd', color: '#111', padding: '12px 32px', borderRadius: '30px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 2px 8px #0003'}}>EXPLORE MINI PCS</a>
      <div style={{marginTop: '40px'}}>
        <img src={placeholderImage} alt="Placeholder" className="home-image" />
      </div>
    </div>
  </section>
);

export default Home;
