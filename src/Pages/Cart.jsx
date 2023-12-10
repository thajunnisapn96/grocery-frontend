import React, { useState, useEffect } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import {BASE_URL} from '../services/baseurl'

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [paymentFormVisible, setPaymentFormVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const getCartTotal = () => {
    setTotal(
      cartArray
        .map((item) => parseFloat(item.github))
        .reduce((p1, p2) => p1 + p2, 0)
    );
  };

  

  const handleCODCheckout = () => {
    // Implement your COD logic here
    alert('Order placed successfully (Cash on Delivery)');
    dispatch(emptyCart());
    navigate('/');
  };

  const handleGPayCheckout = () => {
    // Redirect to Google Pay or handle the redirection
    alert('Redirecting to Google Pay...');
    const googlePayRedirectUrl = 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user'; // Replace with the actual Google Pay URL

  // Redirect to Google Pay
  window.location.href = googlePayRedirectUrl;
  };

  useEffect(() => {
    getCartTotal();
  }, [cartArray]);

  return (
    <div className='container ' style={{ marginTop: '100px' }}>
      {cartArray?.length > 0 ? (
        <div className='row mt-5'>
          <div className='col-lg-7'>
            <Table striped hover bordered responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product?.title}</td>
                    <td>
                      <img
                        width={'100px'}
                        height={'100px'}
                        src={
                          product?.projectThumb
                            ? `${BASE_URL}/uploads/${product?.projectThumb}`
                            : 'https://placehold.co/400x350'
                        }
                        alt=''
                      />
                    </td>
                    <td>${product?.github}</td>
                    <td>
                      <button
                        className='btn btn-danger'
                        onClick={() => dispatch(removeFromCart(product._id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4'>
            <div className='border p-3 rounded shadow'>
              <h3 className='mb-4'>Cart Summary</h3>
              <h6>Total Products: <span>{cartArray.length}</span></h6>
              <h6>Total: $ <span>{total}</span></h6>
              <Button
                onClick={() => setPaymentFormVisible(true)}
                variant='success'
                className='w-100'
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className='container d-flex justify-content-center align-items-center flex-column mt-5'>
          <img
            src='./assets/cart.jpg'
            alt='Empty Cart'
            className='mb-3'
            style={{ borderRadius: '50%' }}
            width={'200px'}
          />
          <h3 className='text-danger mb-4'>Your Cart is Empty!</h3>
          <Link to={'/'}>
            <Button variant='success'>Continue Shopping</Button>
          </Link>
        </div>
      )}

      {paymentFormVisible && (
        <div className='row mt-5'>
          <div className='col-lg-7'>
            <Form>
              <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter your name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formPhoneNumber'>
                <Form.Label>Phone Number:</Form.Label>
                <Form.Control
                  type='tel'
                  placeholder='Enter your phone number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formAddress'>
                <Form.Label>Delivery Address:</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Enter your delivery address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4'>
            <Button
              onClick={handleCODCheckout}
              variant='success'
              className='w-100 mt-3'
            >
              Pay with Cash on Delivery
            </Button>

            <Button
              onClick={handleGPayCheckout}
              variant='success'
              className='w-100 mt-3'
            >
              Pay with Google Pay
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;