import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ManageProduct from '../components/ManageProduct'
import Profile from '../components/Profile'
import { Link } from 'react-router-dom'

function Dashboard() {
  const [username, setUsername] = useState(" ")
  useEffect(() => {
    const existingUserString = sessionStorage.getItem("registeredUser");
  
    try {
      // Attempt to parse the existingUserString
      const existingUser = JSON.parse(existingUserString);
  
      // Check if existingUser is an object and has a 'username' property
      if (existingUser && typeof existingUser === 'object' && existingUser.username=='admin') {
        setUsername(existingUser.username);
      } else {
        console.error("Invalid user data in sessionStorage:", existingUser);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);
  
  
  
  
  
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
        
        </Col>
      
      </Row>
     
      </div>
    </>
  )
}

export default Dashboard