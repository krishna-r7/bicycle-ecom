import react, { useState, useEffect } from 'react'
import './admin.css'
import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Offcanvas, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';


export default function Dashadmin() {
    const [viewdata,setviewData] = useState([])
    useEffect(()=>{
          fetch('/Adminviewuserdata')
            .then(response => response.json())
            .then(viewdata => {
              setviewData(viewdata);
              // console.log(viewdata);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
          },[])
    return (
        <div style={{backgroundColor:"#000",height:"100vh"}}>
          <Container fluid>
            <Row className='p-5'>
                <Col lg={3} md={6} sm={12} className='mt-3'>
                    <div style={{backgroundColor:"#191C24"}} className='rounded-2 p-4'>
                        <div>
                        <span className='admininfo1'><i class="fa-solid fa-user-check"></i> No of Users</span>
                        </div>
                        <div>
                        <span className='adminconinfo1'>{viewdata.length}</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className='mt-3'>
                    <div style={{backgroundColor:"#191C24"}} className='rounded-2 p-4'>
                        <div>
                        <span className='admininfo1'><i class="fa-solid fa-user-check"></i> No of Users</span>
                        </div>
                        <div>
                        <span className='adminconinfo1'>100</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className='mt-3'>
                    <div style={{backgroundColor:"#191C24"}} className='rounded-2 p-4'>
                        <div>
                        <span className='admininfo1'><i class="fa-solid fa-user-check"></i> No of Users</span>
                        </div>
                        <div>
                        <span className='adminconinfo1'>100</span>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className='mt-3'>
                    <div style={{backgroundColor:"#191C24"}} className='rounded-2 p-4'>
                        <div>
                        <span className='admininfo1'><i class="fa-solid fa-user-check"></i> No of Users</span>
                        </div>
                        <div>
                        <span className='adminconinfo1'>100</span>
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>
        
               
        </div>
    )
}