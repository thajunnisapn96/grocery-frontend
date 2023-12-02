import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthToken'
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header({insideDashboard}) {
  const {setIsAuth} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  const handleLogout = ()=>{
      sessionStorage.removeItem("existingUser")
      sessionStorage.removeItem("token")
      setIsAuth(false)
      navigate('/')

  }
  return (
    <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
            <i class="fa-solid fa-truck-fast me-2"></i>Grocery Hub</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded'>
                <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',
                color:'white',fontWeight:'bold'}}>
                <i class="fa-solid fa-heart text-danger-subtle me-2"></i>Wishlist
            <Badge className='ms-2 rounded' bg='light'></Badge>
            </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-2'>
                <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',
                color:'white',fontWeight:'bold'}}>
                <i class="fa-solid fa-cart-shopping text-warning-subtle  me-2"></i>Cart
            <Badge className='ms-2 rounded' bg='light'></Badge>
            </Link>
            </Nav.Link>
            <Nav.Link className='btn btn-success ms-4'>
  <Link to={'/login'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>
    <i className="fa-solid fa-user text-light me-2"></i>
    <Badge className='ms-2 rounded-circle' bg='light'></Badge>
  </Link>
</Nav.Link>
<Nav.Link className='btn btn-warning ms-4'>
  <Link to={'/dashboard'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}>
    <i className="fa-solid fa-gear text-warning me-2"></i>
    <Badge className='ms-2 rounded-circle' bg='light'></Badge>
  </Link>
</Nav.Link>

                      </Nav>
        </Navbar.Collapse>
        {
                    insideDashboard&&
                    <Navbar.Text>
                            <Button onClick={handleLogout} className='btn'> LOGOUT </Button>
                    </Navbar.Text>
                }
      </Container>
    </Navbar>
  )
}

export default Header