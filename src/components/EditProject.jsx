import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../contexts/ContextShare';



function EditProject({ project }) {
    const { setEditProjectResponse } = useContext(editProjectResponseContext)
    
    const [projectDetails, setProjectDetails] = useState({
        id:project._id,title: project.title, languages: project.language
, overview: project.overview, github:project.github, website:project.website, projectThumb: ""
    })
    
    const [preview, setPreview] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setProjectDetails({
            title: project.title, languages: project.language ,overview: project.overview, github: project.github, website: project.website, projectThumb: ""
        })
        setPreview("");
    };
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if (projectDetails.projectThumb) {
            setPreview(URL.createObjectURL(projectDetails.projectThumb))
        }
    },[projectDetails.projectThumb])
    const handleUpdate= async ()=>{
        const { id, title, languages, overview, github, website, projectThumb } = projectDetails
        console.log(preview);
        if (!title || !languages || !overview || !github || !website){
            toast.warning("Values cannot be Null")
        }else{
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("language", languages)
            reqBody.append("overview", overview)
            reqBody.append("github", github)
            reqBody.append("website", website)
            preview ? reqBody.append("projectThumb", projectThumb) : reqBody.append("projectThumb",project.projectThumb)
            const token = sessionStorage.getItem("token")
            
        if (preview) {
            let reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            }
            //api call
            const result = await editProjectAPI(id,reqBody,reqHeader)
            if (result.status === 200) {
                handleClose()
                //pass response to manage projects
                setEditProjectResponse(result.data)
            }else{
                console.log(result);
                console.log(result.response.data);
            }

        }else{
            let reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            // api call
            const result = await editProjectAPI(id, reqBody, reqHeader)
            if (result.status === 200) {
                handleClose()
                //pass response to manage projects
                setEditProjectResponse(result.data)
            } else {
                console.log(result);
                console.log(result.response.data);
            }
        }
    }
    }
    return (
        <>
            <button className='btn' onClick={handleShow}> <i className="fa-regular fa-pen-to-square fa-xl" style={{ color: "#04eb00" }}></i></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header className='bg-success-subtle' closeButton>
                    <Modal.Title className='text-warning'>PRODUCTS</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-success-subtle'>
                    <Row>
                        <Col sm={12} md={6} lg={6} >
                            <label>
                                <input type="file" style={{ display: "none" }} onChange={e=>setProjectDetails({...projectDetails, projectThumb:e.target.files[0]})} />
                                <img className='img-fluid' src={preview?preview:`${BASE_URL}/uploads/${project.projectThumb}`} alt="thumb" />
                            </label>
                        </Col>
                        <Col className='ps-4 d-flex flex-column justify-content-center' sm={12} md={6} lg={6}>
                            <div className='mb-4'><input type="text" className='form-control' placeholder='Product Name' onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} value={projectDetails.title} id="" /></div>
                            <div className='mb-4'><input type="text" className='form-control' placeholder='Price' onChange={e => setProjectDetails({ ...projectDetails, languages: e.target.value })}  value={projectDetails.languages} id="" /></div>
                            <div className='mb-4'><input type="text" className='form-control' placeholder='Category' onChange={e => setProjectDetails({ ...projectDetails, github: e.target.value })} value={projectDetails.github} id="" /></div>
                            <div className='mb-4'><input type="text" className='form-control' onChange={e => setProjectDetails({ ...projectDetails, website: e.target.value })} value={projectDetails.website} placeholder='Availability' name="" id="" /></div>
                        </Col>
                    </Row>
                    <div className='mt-4'><input type="text" className='form-control' placeholder='Product Description' onChange={e => setProjectDetails({ ...projectDetails, overview: e.target.value })} value={projectDetails.overview} id="" /></div>
                </Modal.Body>
                <Modal.Footer className='bg-success-subtle'>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button onClick={handleUpdate} variant="warning">Apply Changes</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-right' autoClose={2000} theme='colored' />
        </>
    )
}

export default EditProject