import react, { useState, useEffect } from 'react'
import '../style.css'
import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from './Main/Footer';
import Dashnav from './Dashnav';

export default function About() {
    return (
        <>
            <Dashnav />
            <div className='aboutbg'>
                <Container fluid className="h-100">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col xs="auto">
                            <h1 className="text-center abouthead">About Us</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className='py-5 mt-5'>
                        <h1 className='processhead'>Our Process</h1>
                    </Row>
                    <Row className='px-5'>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className='processh text-start'>&nbsp; 01.</h6>
                            <h5 className='processh1 text-start'>Research</h5>
                            <p className='text-start processpara text-secondary '>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className='processh text-start'>&nbsp; 02.</h6>
                            <h5 className='processh1 text-start'>Idea & Concept</h5>
                            <p className='text-start processpara text-secondary '>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className='processh text-start'>&nbsp; 03.</h6>
                            <h5 className='processh1 text-start'>Design & Production​</h5>
                            <p className='text-start processpara text-secondary '>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h6 className='processh text-start'>&nbsp; 04.</h6>
                            <h5 className='processh1 text-start'>Sales & Service​</h5>
                            <p className='text-start processpara text-secondary '>Lorem ipsum dolor sit amet, consec tetur elit. Ut elit tellus, luctus nec ullam corper.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mountimg4 mt-5">
                <Container fluid>
                    <Row className="mountendhead text-center">
                        <Col>
                            <div className="mx-auto text-center mountendtop">
                                <h4 className="mountendtitle mx-auto text-center">
                                    The All New</h4>
                            </div>
                            <div className="">
                                <h1 className="mountendtitle2">Kryo X26 MTB Is Here</h1>
                            </div>
                            <div>
                                <p className="mountendtitle3">Nam nec tellus a odio tincidunt auctor a ornare odio.
                                    Sed non mauris vitae erat consequat auctor eu in elit.
                                    Class aptent taciti <br></br> sociosqu ad litora
                                    torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                            </div>
                            <div>
                                <Form className="d-flex justify-content-center mt-4">
                                    <Button style={{ backgroundColor: "#DF453E" }} className='btn rounded-0 border-0'>Shop Now</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )
}
