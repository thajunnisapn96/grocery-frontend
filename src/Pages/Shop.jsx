
//shop
import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { allProjectsAPI, AddProjectApi } from '../services/allAPI'; // Make sure to import AddProjectApi
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addProjectResponseContext } from '../contexts/ContextShare';
import { toast } from 'react-toastify'; // Make sure to import toast

function Shop() {
  const { setAddProjectResponse } = useContext(addProjectResponseContext);
  const dispatch = useDispatch();
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    language: "",
    overview: "",
    projectThumb: "",
    github: "",
    website: "",
  });
 
  const [selectedCategory, setSelectedCategory] = useState(""); // Add this line
  const [allProjects, setAllProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const token = sessionStorage.getItem("token");
  const [searchkey, setSearchKey] = useState("");
 

  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, language, overview, projectThumb, github, website } = projectDetails;

    if (!title || !language || !overview || !projectThumb || !github || !website) {
      toast.warning("Fill Completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("overview", overview);
      reqBody.append("projectThumb", projectThumb);
      reqBody.append("github", github);
      reqBody.append("website", website);

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };

        try {
          const result = await AddProjectApi(reqBody, reqHeader);

          if (result.status === 200) {
            setAddProjectResponse(result.data);
            toast.success("Project added successfully");
          } else {
            console.error("API error:", result);
          }
        } catch (error) {
          console.error("API request failed:", error);
        }
      }
    }
  };

  useEffect(() => {
    const categoryNames = ['Grocery', 'Fresh Vegetables','Fruits', 'Cleaning', 'Personal Care', 'Dry Fruits', 'Meat',  'Poultry'];
    setCategories(categoryNames);
  }, []);

  const getAllProjects = async () => {
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      };
      try {
        const result = await allProjectsAPI(searchkey, reqHeader);
        if (result.status === 200) {
          setAllProjects(result.data);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.error("API request failed:", error);
      }
    }
  };

  useEffect(() => {
    getAllProjects();
  }, [searchkey]);

  return (
    <>
      <Header />
      <div className='w-100 text-center mt-5 bg-danger-subtle'>
        <h3>All Products</h3>
        <Form className='w-100 mt-5 d-flex justify-content-center'>
  <Form.Group className="mb-3 w-50 d-flex" controlId="search">
    <Form.Control
      type='text'
      placeholder='Search by keyword...'
      value={searchkey}
      onChange={(e) => setSearchKey(e.target.value)}
    />
   
  </Form.Group>
</Form> 


<Row style={{ width: "100%" }} className='container ms-5 me-5 justify-content-center'>
      {allProjects.map((project, index) => (
        <Col className='mb-5' key={index} sm={12} md={6} lg={4}>
          <div>
            <ProductCard project={project} />
          </div>
        </Col>
      ))}
    </Row>
      </div>
    </>
  );
}

export default Shop;