import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AddProjectApi } from '../services/allAPI';
import { addProjectResponseContext } from '../contexts/ContextShare';

function AddProject() {
  const { setAddProjectResponse } = useContext(addProjectResponseContext)
  const [projectDetails, setProjectDetails] = useState({
    title: "", languages: "", overview: "", github: "", website: "", projectThumb: ""
  })
  // console.log(projectDetails);
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({ title: "", languages: "", overview: "", github: "", website: "", projectThumb: "" })
    setPreview("")
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (projectDetails.projectThumb) {
      setPreview(URL.createObjectURL(projectDetails.projectThumb))
    }
  }, [projectDetails.projectThumb])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])
  const handleAdd = async (e) => {
    e.preventDefault()
    const { title, language, overview, projectThumb, github, website } = projectDetails
    if (!title || !language || !overview || !projectThumb || !github || !website) {
      toast.warning("Fill Completely")
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("projectThumb", projectThumb)
      reqBody.append("github", github)
      reqBody.append("website", website)

      if (token) {
        let reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await AddProjectApi(reqBody, reqHeader)
        // console.log(result);
        if (result.status === 200) {
          console.log(result.data);
          handleClose();
          setAddProjectResponse(result.data)
        } else {
          console.log(result);
          console.log(result.response.data);
        }
      }
    }
  }
  return (
    <>
      <Button variant="" className='btn-outline-success' onClick={handleShow}>
        ADD PROJECT
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>PROJECT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6} lg={6} >
              <label>
                <input type="file" onChange={e => setProjectDetails({ ...projectDetails, projectThumb: e.target.files[0] })} style={{ display: "none" }} />
                <img className='img-fluid' src={preview ? preview :
                  "https://placehold.co/400x350"
                } alt="thumb" />
              </label>
            </Col>
            <Col className='ps-4 d-flex flex-column justify-content-center' sm={12} md={6} lg={6}>
              <div className='mb-4'><input type="text" className='form-control' onChange={e => setProjectDetails({ ...projectDetails, title: e.target.value })} placeholder='Project title' value={projectDetails.title} id="" /></div>
              <div className='mb-4'><input type="text" className='form-control' onChange={e => setProjectDetails({ ...projectDetails, language: e.target.value })} placeholder='Language used' value={projectDetails.language} id="" /></div>
              <div className='mb-4'><input type="text" className='form-control' onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} placeholder='Github Link' value={projectDetails.github} id="" /></div>
              <div className='mb-4'><input type="text" className='form-control' onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} value={projectDetails.website} placeholder='Website Link' name="" id="" /></div>
            </Col>
          </Row>
          <div className='mt-4'><input type="text" className='form-control' onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} placeholder='Project OverView' value={projectDetails.overview} id="" /></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button onClick={handleAdd} variant="primary">ADD</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </>
  )
}

export default AddProject