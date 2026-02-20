import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { wixServices } from '../services/veloService';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [warranty, setWarranty] = useState('1YR');

  useEffect(() => {
    wixServices.getProducts().then(products => {
      const found = products.find(p => String(p.id) === String(id));
      setProduct(found);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = async () => {
    await wixServices.addToCart(product.id, quantity);
    alert('Product added to cart');
  };

  const handleCheckout = async () => {
    alert('Checkout coming soon.');
  };

  if (loading) return <div style={{color:'#fff',textAlign:'center'}}>Loading...</div>;
  if (!product) return <div style={{color:'#fff',textAlign:'center'}}>Product not found</div>;

  const galleryImages = product.image ? [product.image, product.image, product.image] : [];

  return (
    <section className="product-detail">
      <div className="product-detail__crumbs">Home / All Products / {product.model || product.name}</div>
      <div className="product-detail__shell">
        <div className="product-detail__gallery">
          <div className="product-detail__thumbs">
            {galleryImages.length > 0 ? (
              galleryImages.map((image, index) => (
                <div className="product-detail__thumb" key={index}>
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))
            ) : (
              [0, 1, 2].map((idx) => (
                <div className="product-detail__thumb" key={idx}>THUMB</div>
              ))
            )}
          </div>
          <div className="product-detail__main">
            {product.image ? (
              <img src={product.image} alt={product.model || product.name} />
            ) : (
              <div className="product-detail__placeholder">PC IMAGE</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={() => navigate(-1)} style={{background:'none',border:'none',color:'#ff4ecd',fontWeight:700,cursor:'pointer',marginBottom:16}}>&larr; Back</button>
          <h1 className="product-detail__title">{product.model || product.name}</h1>
          <div className="product-detail__price">{product.price || '$0'}</div>
          <div className="product-detail__specs">{product.specs || product.desc}</div>
          <div className="product-detail__desc">{product.description || product.details}</div>

          <div style={{fontWeight:700, marginBottom:10}}>Warranty Extension</div>
          <div className="product-detail__options">
            {['1YR', '2YR', 'No Extension'].map(option => (
              <button
                key={option}
                className={`product-detail__option ${warranty === option ? 'product-detail__option--active' : ''}`}
                onClick={() => setWarranty(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="product-detail__qty">
            <span style={{fontWeight:700}}>Quantity</span>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <div className="product-detail__cta">
            <button className="primary" onClick={handleAddToCart}>Add to cart</button>
            <button className="secondary" onClick={handleCheckout}>Buy now</button>
          </div>

          <div className="product-detail__accordion">
            <details open>
              <summary>Product Description</summary>
              <p>{product.description || product.details}</p>
            </details>
            <details>
              <summary>Returns & Refund Policy</summary>
              <p>Easy returns and exchanges. We are here to ensure you buy with confidence.</p>
            </details>
            <details>
              <summary>Shipping Info</summary>
              <p>Fast, insured shipping with tracking. Delivery times vary by region.</p>
            </details>
            <details>
              <summary>Specifications</summary>
              <p>{product.specs || 'Full specs available on request.'}</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
