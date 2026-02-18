import React from 'react';
import 'animate-ui/dist/animate.min.css';

const services = [
  {
    title: 'VAPOR CHAMBER COOLING TECH',
    desc: 'Vapor Chamber Cooling asegura una micro-arquitectura silenciosa y densa para cargas profesionales.',
    img: '/assets/service1.png'
  },
  {
    title: 'HIGH-DENSITY MODULES',
    desc: 'Nodos premium con garantía local. Micro-arquitectura silenciosa y sin desorden.',
    img: '/assets/service2.png'
  },
  {
    title: 'ZERO CLUTTER DEPLOYMENT',
    desc: 'Unidades montables, bajo consumo y sin desorden en el escritorio.',
    img: '/assets/service3.png'
  },
  {
    title: 'IRISH EXPERT ASSISTANCE',
    desc: 'Garantía y soporte local por especialistas. Hardware eficiente para oficinas minimalistas.',
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
