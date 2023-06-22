import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Styles/ProductCard.sass';

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        onClick={handleShow} 
        className="product-image" // ge klassnamn för att styra storlek/proportioner i CSS/SASS
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price} SEK</p> 
      <button>Lägg till i varukorgen</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
            src={product.image} 
            alt={product.name} 
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProductCard;
