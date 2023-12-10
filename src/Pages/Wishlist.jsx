import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { BASE_URL } from '../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleWishlistCart = (product) => {
    console.log("adding to cart:",product);
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product._id))
   
   // Show toast notification
   toast.success('item added to cart!', {
    position: "top-right",
    autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
 
  };

  return (
    <div style={{ marginTop: '100px' }} className='bg-danger-subtle'>
      <Row className='ms-5'>
        {wishlistArray.length > 0 ? (
          wishlistArray.map((product, index) => (
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
              <Card className='shadow rounded' style={{ width: '18rem', height: '29rem' }}>
                <Card.Img
                  variant='top'
                  style={{ height: '200px' }}
                  src={product?.projectThumb ? `${BASE_URL}/uploads/${product?.projectThumb}` : "https://placehold.co/400x350"}
                  alt={product?.title}
                />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <h5>${product?.github}</h5>
                  <Card.Text>
                    {product?.overview ? (
                      <p>{product?.overview.slice(0, 55)}...</p>
                    ) : (
                      <p>No description available</p>
                    )}
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button
                     onClick={()=>dispatch(removeFromWishlist(product._id))}
                      className='btn btn-light'
                     
                    >
                      <i className='fa-solid fa-trash text-danger me-2'></i>
                    </Button>
                    <Button
  onClick={() => {
    handleWishlistCart(product);
   // toast.success('Item added to cart!', { position: 'bottom-right' });
  }}
  className='btn btn-light'
>
  <i className='fa-solid fa-cart-shopping text-success me-2 '></i>
</Button>
<ToastContainer position='bottom-right' autoClose={3000} />

                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
         )
         
        ) : (
          <div
            style={{ height: '60vh' }}
            className='w-100 d-flex flex-column justify-content-center align-items-center'
          >
            <img
              height={'250px'}
              src='https://media0.giphy.com/media/hpdxVSq32dhQUdmiJC/giphy.gif?cid=6c09b952i2ccfdm0ww626w931z2d2q0im7z6sfg48rbkejbn&ep=v1_stickers_related&rid=giphy.gif&ct=s'
              alt=''
            />
            <h3 className='fw-bolder text-primary'>Your wishlist is empty!!</h3>
            <Link style={{ textDecoration: 'none' }} className='btn btn-success rounded mt-3' to={'/'}>
              Back to Home
            </Link>
          </div>
        )}
      </Row>
    </div>
  );
}

export default WishList;
