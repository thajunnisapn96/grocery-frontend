import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function ProductCard() { // Accept product as a prop
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <Card className="mb-4 shadow bg-primary-subtle" style={{ width: '12rem' }}>
      <Card.Img className='p-1' variant="top" src="./assets/44.jpg" alt="" />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text className="mb-2">Price: $100</Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <Button onClick={() => dispatch(addToWishlist())} variant="danger-subtle">
            <i className="fa-solid fa-heart text-danger me-2"></i>
          </Button>
          <Button onClick={() => dispatch(addToCart())} variant="danger-subtle">
            <i className="fa-solid fa-cart-shopping text-success me-2"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;