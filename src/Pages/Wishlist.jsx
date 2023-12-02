import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
function WishList() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleWishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
      }
  return (
    <div  style={{marginTop:"100px"}}>
<Row className='ms-5'>
  {
    wishlistArray.length>0?
  wishlistArray.map((product,index)=>(
<Col key={index} className="mb-5" sm={12} ms={6} lg={4} xl={3}>
    <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
      <Card.Img variant="top" style={{height:'200px'}} src="./assets/x.jpg" />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <h5>${product?.price}</h5>
        <Card.Text>
          <p>{product?.description.slice(0,55)}...</p>
        </Card.Text>
       <div className="d-flex justify-content-between">
<Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn btn-light">
<i class="fa-solid fa-trash text-danger me-2"></i>
</Button>
<Button onClick={()=>handleWishlistCart(product)} className="btn btn-light">
<i class="fa-solid fa-cart-shopping text-success me-2"></i>
</Button>
       </div>
      </Card.Body>
    </Card>
    </Col>)):<div style={{height:'60vh'}} className='w-100 d-flex flex- column justify-content-center align-items-center'>
      <img height={'250px'} src="https://media0.giphy.com/media/hpdxVSq32dhQUdmiJC/giphy.gif?cid=6c09b952i2ccfdm0ww626w931z2d2q0im7z6sfg48rbkejbn&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" />
      <h3 className='fw-bolder text-primary'>Your wishlist is empty!!</h3>
     <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back 
     to Home</Link>
    </div>
}
    </Row>
    </div>
  )
}

export default WishList