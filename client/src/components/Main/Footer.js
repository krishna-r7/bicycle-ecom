import React from "react";
import '../../style.css'
import { Button,Nav,Container,Navbar,NavDropdown,Image,Form,Row,Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

function Footer(){
    return(
        <>
        <div>
           <Container fluid style={{backgroundColor:"#161616"}}>
            <Row className="p-5 p-md-5">
            <Col lg={3} xs={12} md={3} className="mt-2">
            <Image src='../images/logo.png' className='logofoot'></Image>
            </Col>
            <Col lg={3} xs={12} md={3} className="mt-2">
                <h3 className="footnav text-center text-lg-start py-2"><i>Usefull Links</i></h3>
                <h5 className="footitem text-center text-lg-start"><Link to="/" className="footitem">Home</Link></h5>
                <h5 className="footitem text-center text-lg-start">Shop</h5>
                <h5 className="footitem text-center text-lg-start">About Us</h5>
                <h5 className="footitem text-center text-lg-start">Contact Us</h5>
            </Col>
            <Col lg={3} xs={12} md={3} className="mt-2">
            <h3 className="footnav text-center text-lg-start py-2"><i>Our Collection</i></h3>
                <h5 className="footitem text-center text-lg-start ">Mountain Bikes</h5>
                <h5 className="footitem text-center text-lg-start ">City Bikes</h5>
                <h5 className="footitem text-center text-lg-start ">Speciality Bikes</h5>
                <h5 className="footitem text-center text-lg-start ">Electric Bikes</h5>
            </Col>
            <Col lg={3} xs={12} md={3} className="mt-2">
            <h3 className="footnav text-center text-lg-start py-2"><i>Account</i></h3>
                <h5 className="footitem text-center text-lg-start">Customer Login</h5>
                <h5 className="footitem text-center text-lg-start">Dealer Login</h5>
                <h5 className="footitem text-center text-lg-start">Addressess</h5>
                <h5 className="footitem text-center text-lg-start">Payment Methods</h5>
            </Col>
            </Row>
            <hr className="text-white"></hr>
            <Container>
            <span className="text-white">Copyright © 2023 MidhunRaj</span>
            </Container>
            
           </Container>
        </div>
        </>
    )
}

export default Footer