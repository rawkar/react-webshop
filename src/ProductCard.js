import React from 'react';
import './Styles/ProductCard.sass';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <button>Lägg till i varukorgen</button>
  </div>
);

export default ProductCard;
