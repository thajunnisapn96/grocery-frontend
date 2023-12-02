import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'
import { allProjectsAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function Project() {
  const [searchkey, setSearchKey] = useState("")
  const [allProjects, setAllProjects] = useState([])
  const getAllProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json","Authorization":`bearer ${token}`
      }
      const result = await allProjectsAPI(searchkey,reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }
  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()
  },[searchkey])

  return (
    <>
      <Header/>
      <div className='w-100 text-center mt-5'>

        <h3>All Products</h3>
        <Form className='w-100 mt-5 d-flex justify-content-center'>
          <Form.Group className="mb-3 w-50 d-flex " controlId="search">
            <Form.Control value={searchkey} onChange={e=>setSearchKey(e.target.value)} type="text" placeholder="Search product by category" />
            <Button className='btn btn-light ms-3'><i className="fa-solid fa-magnifying-glass fa-2xl"></i></Button>
          </Form.Group>
          </Form>

          <Row style={{width:"100%"}} className='container m-5'>
            {
              allProjects.length>0?allProjects.map((project,index)=>(
                <Col className='mb-5' key={index} sm={12} md={6} lg={4}>
                  <ProductCard project={project} />
                </Col>
              )) : <div className='Text-light fs-5 text-warning'>Login to View all products | <Link className='text-decoration-none ' to={'/login'}>Login here</Link></div>
              
            }
          </Row>
      </div>
    </>
  )
}

export default Project