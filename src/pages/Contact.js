import React from 'react';
import 'animate-ui/dist/animate.min.css';

const Contact = () => (
  <section id="contact" className="section animate__animated animate__fadeInUp" style={{background: '#0a0a0a'}}>
    <h2 style={{textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '30px'}}>Contact</h2>
    <form style={{maxWidth: '400px', margin: '0 auto', background: '#181818', borderRadius: '16px', padding: '32px', boxShadow: '0 2px 16px #0006'}}>
      <input type="text" placeholder="Name" style={{width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: '#222', color: '#fff'}} />
      <input type="email" placeholder="Email" style={{width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: '#222', color: '#fff'}} />
      <textarea placeholder="Message" rows="4" style={{width: '100%', padding: '12px', marginBottom: '16px', borderRadius: '8px', border: 'none', background: '#222', color: '#fff'}} />
      <button type="submit" style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#ff4ecd', color: '#111', fontWeight: 700, fontSize: '1.1rem'}}>Send</button>
    </form>
  </section>
);

export default Contact;
