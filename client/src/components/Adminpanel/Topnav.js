import react, { useState, useEffect } from 'react'
import './admin.css'
import { Button, Nav, Container, Navbar, NavDropdown, Dropdown, Image, Form, Offcanvas, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';


export default function Topnav() {

  const adminnavcolor = {
    backgroundColor: '#191C24',
  };

  return (
    <>
      <div>
        <Navbar expand="lg" style={adminnavcolor} className="">
          <Container fluid>
            <Navbar.Brand className='adminlog ms-3 py-2' style={{ color: "#EB1616", fontSize: "20px", fontWeight: "800",cursor:"pointer" }}><i class="fa-solid fa-user-pen"></i> ADMIN</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Navbar.Collapse className="d-flex justify-content-start ms-5">
                <Form className="searchbar text-center ">
                  <Form.Control
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="rounded-3"
                    style={{ width: "280px" }}
                  />
                </Form>
              </Navbar.Collapse>
              <div className='d-flex'>
                <Nav className="d-flex mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
                  <Link to="/Addproduct" className='adminnavhome ms-3 mt-1'>ADD PRODUCT</Link>
                  <Link to="/Productview" className='adminnavhome ms-3 mt-1 text-center'>PRODUCT VIEW</Link>
                  <Link to="/Verification" className='adminnavhome ms-3 mt-1'>VERIFICATION</Link>
                </Nav>
              </div>
              <div className='ms-md-5 px-2'>
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <Image src='./images/Admin.jpeg' className='adminnavimg'></Image>
          <span className='text-white ms-2' style={{fontFamily:"sans-serif", fontWeight:"500"}}>Midhun Raj</span>
        </Dropdown.Toggle>
        <Dropdown.Menu className='rounded-0 mt-2'>
          <Dropdown.Item href="#profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#settings">Settings</Dropdown.Item>
          <Dropdown.Item href="#logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}