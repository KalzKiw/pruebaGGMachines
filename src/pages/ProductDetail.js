import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { wixServices } from '../services/veloService';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wixServices.getProducts().then(products => {
      const found = products.find(p => String(p.id) === String(id));
      setProduct(found);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = async () => {
    await wixServices.addToCart(product.id);
    alert('Producto agregado al carrito');
  };

  const handleCheckout = async () => {
    alert('Pago en configuracion. Pronto habilitaremos el checkout.');
  };

  if (loading) return <div style={{color:'#fff',textAlign:'center'}}>Cargando...</div>;
  if (!product) return <div style={{color:'#fff',textAlign:'center'}}>Producto no encontrado</div>;

  return (
    <section style={{maxWidth:600,margin:'40px auto',background:'#181818',borderRadius:16,padding:32,color:'#fff',boxShadow:'0 2px 16px #0006'}}>
      <button onClick={() => navigate(-1)} style={{marginBottom:20,background:'none',border:'none',color:'#7fff00',fontWeight:700,cursor:'pointer'}}>&larr; Volver</button>
      <h2 style={{fontSize:'2.2rem',marginBottom:16}}>{product.model || product.name}</h2>
      <img src={product.image || '/assets/prod1.png'} alt={product.model} style={{width:'100%',maxWidth:320,borderRadius:12,marginBottom:24}} />
      <p style={{color:'#7fff00',fontWeight:700}}>{product.specs || product.desc}</p>
      <p style={{margin:'16px 0'}}>{product.description || product.details}</p>
      <p style={{fontSize:'1.5rem',fontWeight:900'}}>{product.price}</p>
      <div style={{marginTop:24,display:'flex',gap:16}}>
        <button onClick={handleAddToCart} style={{background:'#7fff00',color:'#181818',padding:'12px 32px',borderRadius:30,fontWeight:700,border:'none',cursor:'pointer'}}>Añadir al carrito</button>
        <button onClick={handleCheckout} style={{background:'#fff',color:'#181818',padding:'12px 32px',borderRadius:30,fontWeight:700,border:'none',cursor:'pointer'}}>Comprar ahora</button>
      </div>
    </section>
  );
};

export default ProductDetail;
