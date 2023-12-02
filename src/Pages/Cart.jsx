import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(emptyCart());
    alert('Order placed');
    navigate('/');
  };

  
  return (
    <div className='container' style={{ marginTop: '100px' }}>
      
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
               
                  <tr >
                    <td>1</td>
                    <td>shampoo</td>
                    <td>
                      <img
                        width={'100px'}
                        height={'100px'}
                        src="./assets/x.jpg"
                        alt=''
                      />
                    </td>
                    <td>$5</td>
                    <td>
                      <button
                        className='btn btn-danger'
                       
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                
              </tbody>
            </Table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4'>
            <div className='border p-3 rounded shadow'>
              <h3 className='mb-4'>Cart Summary</h3>
              <h6>Total Products:</h6>
              <h6>Total: $ </h6>
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
       
    </div>
  );
}

export default Cart;
