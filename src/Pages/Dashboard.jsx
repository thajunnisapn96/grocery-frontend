import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import ManageProduct from '../components/ManageProduct';
import { Link } from 'react-router-dom';
import { allProjectsAPI } from '../services/allAPI';

function Dashboard() {
  const [username, setUsername] = useState(" ");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const existingUserString = sessionStorage.getItem("registeredUser");

    try {
      const existingUser = JSON.parse(existingUserString);

      if (existingUser && typeof existingUser === 'object' && existingUser.username === 'admin') {
        setUsername(existingUser.username);
        getAllProducts(); // Fetch all products when the component mounts
      } else {
        console.error("Invalid user data in sessionStorage:", existingUser);
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, []);

  const getAllProducts = async () => {
    // Fetch all products from the API
    try {
      const result = await allProjectsAPI('', {});
      if (result.status === 200) {
        setAllProducts(result.data);
      } else {
        console.error("Failed to fetch products:", result);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <>
      <Header insideDashboard />
      <div className='d-container mt-3'>
        <h3 className='m-4'>WELCOME <span className='text-success'>{username}</span></h3>
        <Row className='m-3'>
          <Col sm={12} md={8}>
            <ManageProduct products={allProducts} />
            <Link to="/shop" className="btn btn-success mt-3">
              Go to Products
            </Link>
          </Col>
          <Col sm={12} md={4}>
            {/* Add any other components or content for the right column */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
