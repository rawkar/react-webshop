import React from 'react';
import ProductCard from './ProductCard';
import './Styles/ProductGrid.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ProductGrid = ({ products }) => {
  return (
    <Row>
      {products.map(product => (
        <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductGrid;

