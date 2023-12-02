import { useState, React, useEffect, useContext } from 'react'
import { Alert, Card } from 'react-bootstrap'
import AddProject from './Addproject'
import { deleteProjectAPI, userProjectAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { addProjectResponseContext, editProjectResponseContext } from '../contexts/ContextShare'
import EditProject from './EditProject'


function ManageProject() {
   const { editProjectResponese } = useContext(editProjectResponseContext)
    const { addProjectResponse } = useContext(addProjectResponseContext)
    const [userProjects, setUserProjects] = useState([])
    const getUserProject = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json", "Authorization": `Bearer ${token}`
            }
            const result = await userProjectAPI(reqHeader)
            if (result.status === 200) {
                setUserProjects(result.data)
            } else {
                console.log(result);
                toast.warning(result.response.data)
            }
        }

    }
    const handleDelete = async (id)=>{
        const token = sessionStorage.getItem("token")
        let reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteProjectAPI(id,reqHeader)
        if(result.status === 200){
            getUserProject()
        }else{
            toast.error("Coudn't Delete The item, please try again")
        }
    }
    useEffect(() => {
        getUserProject()
    }, [addProjectResponse,editProjectResponese])
    return (
        <>
       
            <Card className='mt-5'>
                <Card.Body>
                    <div className='d-flex justify-content-between '>
                        <Card.Title style={{ fontSize: "30px" }} className='fw-bolder'>PRODUCTS</Card.Title>
                        <div variant="success"><AddProject /></div>
                    </div>
                    {
                        addProjectResponse.title? <Alert className='bg-primary' dismissible><span className='fw-bolder'>{addProjectResponse.title}</span>  Added successfully</Alert>:null
                    }
                    {
                        userProjects?.length > 0 ? userProjects.map((project, index) => (
                        <Card.Text key={index} className='mt-1 border p-2 rounded border-success d-flex justify-content-between align-items-center'>
                            <h6>{project?.title}</h6>
                            <div className='d-flex align-items-center'>
                                <a href={`${project.github}`} rel="noreferrer" target="_blank"></a>
                                <div><EditProject project={project}/></div>
                                    <button className='btn' onClick={() => handleDelete(project._id)}><i className="fa-solid fa-trash fa-xl" style={{ color: "#ff1a3c" }}></i></button>
                            </div>
                        </Card.Text>)):
                            <Card.Text className='mt-5 border p-3 rounded border-success d-flex justify-content-between'>
                                <h5>No Products Uploaded</h5>
                            </Card.Text>
                    }
                </Card.Body>
            </Card>
            
            <ToastContainer position='top-right' autoClose={2000} theme='colored' />
        </>
    )
}

export default ManageProject