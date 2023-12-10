// ProductCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

import { BASE_URL } from '../services/baseurl';
import { addToWishlist } from '../redux/slices/wishlistSlice';

function ProductCard({ project }) {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cartReducer);

  const handleAddToCart = () => {
    console.log('Adding to cart:', project);
    dispatch(addToCart(project));
    console.log('New state:', cartArray); // Log the state after dispatch
  };
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const handleaddToWishlist=()=>{
    console.log('Adding to wishlist:', project);
    dispatch(addToWishlist(project));
    console.log('New state:', wishlistArray);
  }

  return (
    <>
      <Card className='shadow btn bg-danger-subtle' style={{ width: '18rem',height:'33rem' }}>
        <Card.Img style={{ height: '300px', objectFit: 'cover' }} variant="top" src={project?.projectThumb ? `${BASE_URL}/uploads/${project?.projectThumb}` : "https://placehold.co/400x350"} />
        <Card.Body>
          <Card.Title>{project?.title}</Card.Title>
          <Card.Text>
            <strong>Category:</strong> {project?.language}
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> {project?.github}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {project?.overview}
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-between">
          <Button onClick={handleaddToWishlist} className="btn bg-danger-subtle ">
            <i className="fa-solid fa-heart text-danger me-2 "></i>
          </Button>
          <Button onClick={handleAddToCart} className="btn bg-danger-subtle border-success">
            <i className="fa-solid fa-cart-shopping text-success me-2 "></i>
          </Button>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
