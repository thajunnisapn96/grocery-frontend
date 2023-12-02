import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ManageProduct from '../components/ManageProduct'
import Profile from '../components/Profile'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [username, setUsername] = useState()
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
            
    }
  }, [])
  return (
    <>
      <Header insideDashboard />
      <div className='d-container mt-3'>
      <h3 className='m-4'>WELCOME <span className='text-success'>{username}</span></h3>
      <Row className='m-3'>

        <Col sm={12} md={8}>
          <ManageProduct />
          <Link to="/shop" className="btn btn-success mt-3  ">
            Go to Products
          </Link>
        </Col>
       
        <Col sm={12} md={4}>
          <Profile />
        </Col>
      
      </Row>
     
      </div>
    </>
  )
}

export default Dashboard