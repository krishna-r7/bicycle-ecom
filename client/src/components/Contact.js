import react, { useState, useEffect } from 'react'
import '../style.css'
import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from './Main/Footer';
import Dashnav from './Dashnav';

export default function Contact() {
    return (
        <>
            <Dashnav />
            <div className='contactbg'>
                <h1 className='contacthead'>Contact Us</h1>
            </div>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=punalur&t=&z=10&ie=UTF8&iwloc=&output=embed"
                                frameborder="0"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="Google Map"
                                className="map"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='p-5'>
                <Container>
                <Row className='py-5 mt-5'>
                        <h1 className='processhead'>Contact Details</h1>
                    </Row>
                <Row className='p-3'>
                        <Col lg={4} md={6}>
                            <h5 className='processh1 text-start'>Our Hours</h5>
                            <div>
                            <span className='text-start d-flex fw-bold text-secondary '>10:00 AM – 22.00 PM</span>
                            </div>
                            <div>
                            <span className='text-start d-flex fw-bold text-secondary'>Monday – Friday</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <h5 className='processh1 text-start'>Location</h5>
                           <span className='text-start d-flex fw-bold text-secondary'>India</span>
                        </Col>
                        <Col lg={4} md={6}>
                            <h5 className='processh1 text-start'>Contact Us​</h5>
                            <div>
                            <span className='text-start d-flex fw-bold text-secondary '>Phone: 1 800 755 60 20</span>
                            </div>
                            <div>
                            <span className='text-start d-flex fw-bold text-secondary'>Email: Cycle@company.com</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer/>
        </>
    )
}
