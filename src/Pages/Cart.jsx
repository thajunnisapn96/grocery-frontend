import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };

  const handleCart = () => {
    dispatch(emptyCart());
    alert('Order placed');
    navigate('/');
  };

  useEffect(() => {
    getCartTotal();
  }, [cartArray]);

  return (
    <div className='container' style={{ marginTop: '100px' }}>
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
                        src={product.thumbnail}
                        alt=''
                      />
                    </td>
                    <td>${product?.price}</td>
                    <td>
                      <button
                        className='btn btn-danger'
                        onClick={() => dispatch(removeFromCart(product.id))}
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
                onClick={handleCart}
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
    </div>
  );
}

export default Cart;
