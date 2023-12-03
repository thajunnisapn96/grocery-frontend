import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { tokenAuthContext } from '../contexts/AuthToken'



function Auth({ register }) {
    const {setIsAuth} = useContext(tokenAuthContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        username: "", email: "", password: ""
    })
    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !email || !password) {
            alert("Please fill the form correctly")
        } else {
            const result = await registerAPI(userData)
            // console.log(result);
            if (result.status === 200) {
                toast.success(`${result.data.username} has registered`)
                setUserData({
                    username: "", email: "", password: ""
                })
                navigate('/login')
            } else {
                toast.error(result.response.data)
            }
        }
    }
    // LOGIN
    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = userData
        if (!email || !password) {
            toast.error("Fill the form completely")
        } else {
            const result = await loginAPI(userData)
            if (result.status === 200) {
                sessionStorage.setItem("existingUser", JSON.stringify(result.data.registeredUser))
                console.log(result.data.token)
                sessionStorage.setItem("token", result.data.token)
                console.log(result.data.token)

                setIsAuth(true)
                setUserData({
                    email: "", password: ""
                })
                navigate('/')
            } else {
                toast.warning(result.response.data)
                console.log(result);
            }
        }
    }


    const isRegisterForm = register ? true : false
    return(
<div style={{ width: '100%', height: '100vh' }} className="d-flex mt-3 justify-content-center align-items-center">
      <div className="w-75 container">
        <Link to={'/'} className="btn btn-success mt-5 p-2" style={{ textDecoration: 'none' }}>
          Back to Home
        </Link>
        <div className="card shadow mt-5 p-5 bg-success-subtle">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="./assets/login.png" className="img-fluid rounded" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-bolder text-success mt-2"> {
                                isRegisterForm ? 'Sign up to your account' : 'User Login'
                            }</h1>

<Form>
                            {
                                isRegisterForm &&
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="Text" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} placeholder="User name" />
                                </Form.Group>
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} placeholder="Email Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} placeholder="Password" />
                            </Form.Group>

                            {
                                isRegisterForm ?
                                    <div>
                                        <Button type='submit' onClick={handleRegister} className="btn-primary btn">Register</Button>
                                        <p>Existing User? click here <Link to='/login'>Login</Link></p>
                                    </div> :
                                    <div>
                                        <Button type='submit' onClick={handleLogin} className="btn-primary btn">Login</Button>
                                        <p>New User? click here <Link to={'/register'}>Register</Link></p>
                                    </div>
                            }
                        </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position='top-right' autoClose={2000} theme='colored' />
      </div>




    )}
    export default Auth;

