import react, { useState, useEffect } from 'react'
import '../style.css'
import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Route, Link,useNavigate } from 'react-router-dom';
import Dashnav from './Dashnav';
import Footer from './Main/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function () {
    const navigate = useNavigate()
    const [login,setLogin] = useState({
        email:'', 
        password:''
    });

    const handleChange=(e)=>{
        const {name,value}=e.target
        setLogin({...login,[name]:value})  
        // console.log(login)
    }

      
    const Submitlogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/login', login,{
            headers:{
                'Content-Type':'application/json',
            },
          });
          if (response.status === 200) {  
              toast.success('Logged in successfully!');
              console.log('Login successfully.');
        
            setLogin({
              email: "",
              password: "",
            });
            console.log(response);
            if (response.data.loginData.usertype == 0) {
                navigate("/Adminpanel")
              } else if (response.data.loginData.usertype == 1) {
                navigate("/Index")      
              }
          } 
          else {
            toast.error('Login Failed!');
            console.log('Login Failed.');
           
            console.error('Data insertion failed. Server responded with:', response.status, response.data);
            setLogin({
              email: "",
              password: "",
            });
          }
        } catch (error) {
          console.error('An error occurred:', error.message); 
          toast.error('Login Failed!');
        }
      };
      
    return (
        <>
            <Dashnav />
            <div className='loginbg'>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <div className='loginheader'>
                                    <h1 style={{ fontSize: "48px" }}>Account</h1>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <span style={{ color: "#fff", fontFamily: "sans-serif", fontSize: "16px", cursor: "pointer" }} className='breadlog'>Home / Login</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="d-flex justify-content-center">
                <Container fluid className='d-flex justify-content-center py-5'>
                    <Row className='logbgbox p-5'>
                        <Form className='w-100' onSubmit={Submitlogin}>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" placeholder="Enter email" value={login.email}  onChange={handleChange} name="email" className='py-3 rounded-0 ' />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="password" placeholder="Password"  className='py-3 rounded-0' value={login.password}  onChange={handleChange} name="password"/>
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                 <Form.Check type="checkbox" label="Show Password" />
                            </Form.Group> */}
                            <Button type="submit" className='rounded-0 loginbtn btn-lg btn-dark'>Log In</Button>
                        </Form>
                        <hr className='mt-4'></hr>
                        <div>
                            <Container>
                                <Row className='px-4'>
                                    <Col lg={4} md={12}>
                                        <Link className='logfoot'>Forgot your password?</Link>
                                    </Col>
                                    <Col lg={4} md={12}>
                                        <Link to="/Signup" className='logfoot' reloadDocument>Create Account</Link>
                                    </Col>
                                    <Col lg={4} md={12}>
                                        <Link className='logfoot'>Return to Store</Link>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}