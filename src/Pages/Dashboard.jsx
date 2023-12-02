import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ManageProduct from '../components/ManageProduct'
import Profile from '../components/Profile'


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
      <h3 className='m-4'>WELCOME <span className='text-success'>{username}</span></h3>
      <Row className='m-3'>

        <Col sm={12} md={8}>
          <ManageProduct />
        </Col>

        <Col sm={12} md={4}>
          <Profile />
        </Col>

      </Row>

    </>
  )
}

export default Dashboard