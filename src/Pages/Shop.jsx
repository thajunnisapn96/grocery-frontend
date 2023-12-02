import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
function Shop() {
  const groceryProducts = [
    // Your grocery products data here
    // Example: { id: 1, name: 'Product 1', price: 10.99, image: 'product1.jpg' },
    // ...
  ];

  return (
    <>
      <Header />
      <Container className="mt-5">
    
        <h1 className="text-center mb-5 mt-5 text-warning">Welcome to Grocery Hub</h1>
        <Row className="justify-content-center mb-4">
          <Col md={8} lg={6}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products..."
                aria-label="Search for products"
                aria-describedby="search-button"
              />
              <button className="btn btn-outline-warning" type="button" id="search-button">
                Search
              </button>
            </div>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-md-3 g-4">
          
              <Col >
                <ProductCard  />
              </Col>
           
         
        </Row>
       
      </Container>
    </>
  );
}

export default Shop;
