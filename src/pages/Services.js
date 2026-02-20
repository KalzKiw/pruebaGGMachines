import React from 'react';
import 'animate-ui/dist/animate.min.css';

const services = [
  {
    title: 'VAPOR CHAMBER COOLING TECH',
    desc: 'Vapor chamber cooling enables quiet, dense micro-architecture for professional workloads.',
    img: '/assets/service1.png'
  },
  {
    title: 'HIGH-DENSITY MODULES',
    desc: 'Premium nodes with local warranty. Quiet micro-architecture with zero clutter.',
    img: '/assets/service2.png'
  },
  {
    title: 'ZERO CLUTTER DEPLOYMENT',
    desc: 'Mountable units, low power draw, and a clean desk footprint.',
    img: '/assets/service3.png'
  },
  {
    title: 'IRISH EXPERT ASSISTANCE',
    desc: 'Local warranty and specialist support. Efficient hardware for minimal workspaces.',
    img: '/assets/service4.png'
  }
];

const Services = () => (
  <section id="services" className="section animate__animated animate__fadeInUp" style={{background: '#111'}}>
    <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '40px'}}>HIGH-DENSITY MINI PCS</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px'}}>
      {services.map((srv, idx) => (
        <div key={idx} style={{background: '#181818', borderRadius: '16px', padding: '24px', minWidth: '260px', maxWidth: '320px', flex: '1 1 260px', textAlign: 'left', boxShadow: '0 2px 16px #0006'}}>
          <img src={srv.img} alt={srv.title} style={{width: '100%', borderRadius: '12px', marginBottom: '18px'}} />
          <h3 style={{color: '#fff'}}>{srv.title}</h3>
          <p style={{color: '#ccc'}}>{srv.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
