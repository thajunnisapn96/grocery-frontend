import React, { useEffect, useState } from 'react'
import { Button, Card, Collapse, Form } from 'react-bootstrap'
import avatar from './avatar.png'
import { BASE_URL } from '../services/baseurl'
import { toast } from 'react-toastify'
import { editUserAPI } from '../services/allAPI'


function Profile() {
    const [userProfile, setUserprofile] = useState({
        username: "", email: "", passwrd: "", profile: "", github: "", linkedin: ""
    })
    const [existImage, setExistImage] = useState("")
    const [preview, setPreview] = useState("")
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserprofile({ ...userProfile, username: user.username, email: user.email, passwrd: user.passwrd, profile: "", github: user.github, linkedin: user.linkedin })
        setExistImage(user.profile)
    }, [])

    useEffect(() => {
        if (userProfile.profile) {
            setPreview(URL.createObjectURL(userProfile.profile))
        } else {
            setPreview("")
        }
    }, [userProfile.profile])

    const handleProfileUpdate = async () => {
        const { username, email, password, profile, github, linkedin } = userProfile
        if (!github || !linkedin) {
            toast.info("Fill form completely")
        } else {
            const reqBody = new FormData()
            reqBody.append("username", username)
            reqBody.append("email", email)
            reqBody.append("password", password)
            reqBody.append("github", github)
            reqBody.append("linkedin", linkedin)
            preview ? reqBody.append("profileImage", profile) : reqBody.append("profileImage", existImage)
            const token = sessionStorage.getItem("token")
            if (preview) {
                let reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editUserAPI(reqBody,reqHeader)
                if (result.status === 200) {
                    toast.success("Profile Updated")
                    sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                }else{
                    console.log(result);
                    console.log(result.response.data);
                }
            } else {
                let reqHeader = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
                const result = await editUserAPI(reqBody, reqHeader)
                if (result.status === 200) {
                    toast.success("Profile Updated")
                    sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                } else {
                    console.log(result);
                    console.log(result.response.data);
                }
            }
        }
    }

    const [open, setOpen] = useState(false);

    return (
        <Card className='p-4 mt-5'>
            <div className="d-flex justify-content-between">
                <h5>ADMIN</h5>
                <Button onClick={() => setOpen(!open)} variant="success" className="btn-outline-success"><i className="fa-solid fa-check" style={{ color: "#ffff" }}></i></Button>
            </div>
            {/* <Collapse in={open}> */}
            <label className='text-center'>
                <input style={{ display: "none" }} type="file" onChange={e => setUserprofile({ ...userProfile, profile: e.target.files[0] })} name="" id="" />
                {
                    existImage !== "" ?
                        <img src={preview ? preview : `${BASE_URL}/uploads/${existImage}`} className="img-fluid" width={'200px'} alt="" /> :
                        <img src={preview ? preview : avatar} alt="profile" className="img-fluid" width={'200px'} />
                }

                {/* <img src={avatar} className="img-fluid" width={'200px'} alt="" /> */}
            </label>
            <Form className='mt-4'>
                <Form.Group>
                    <Form.Control value={userProfile.github} onChange={e=>setUserprofile({...userProfile,github:e.target.value})} type="text" placeholder="username" />
                </Form.Group>
                <Form.Group className='mt-4'>
                    <Form.Control value={userProfile.linkedin} onChange={e => setUserprofile({ ...userProfile, linkedin: e.target.value })} required type="text" placeholder="password" />
                </Form.Group>
            </Form>
            <div className='pt-2 align-self-center'><Button className='pt-2' onClick={handleProfileUpdate} variant="success">Update</Button></div>
            {/* </Collapse> */}
        </Card>
    )
}

export default Profile