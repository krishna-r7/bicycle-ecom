import React from "react";
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';
import '../../style.css';

function Landing() {



  return (
    <>
    <div className="bannerbg">
      <Container fluid>
        <Row>
          <Col xs={6} >
            <Container>
              <Row className="bannerhead mt-3">
                <div className="">
                  <h4 className="bannertitle">Newly Launched</h4>
                </div>
                <div className="">
                  <h1 className="bannertitle2">Kryo X26 <br></br> MTB</h1>
                </div>
                <div>
                  <h5 className="bannertitle3 mt-3">Specifications:</h5>
                </div>
                <div>
                  <ul className="list-unstyled text-white">
                    <li className="py-2">
                      <span><i class="fa-solid fa-bullseye mb-2"></i>&nbsp;Lightweight 18" Frame</span>
                      <li><span><i class="fa-solid fa-bullseye mb-2"></i> &nbsp;Steel Suspension Fork</span>
                      </li>
                      <li><span><i class="fa-solid fa-bullseye mb-2"></i> &nbsp;Steel Hardtail Frame</span>
                      </li>
                    </li>
                  </ul>
                </div>
                <div>
                <Form className="d-flex justify-content-start">
            <Button style={{backgroundColor:"#DF453E"}} className='btn rounded-0 navhome d-flex border-0'>Buy Now</Button>
          </Form>
                </div>
              </Row>
            </Container>
          </Col>
          <Col className="bannerright">
          </Col>
        </Row>
      </Container>
    </div>
    {/* -----------------------------------------------Section2 Arrival----------------------------------------------------------- */}
    <div>
        <Container fluid>
          <Row>
            <h2 className="arrival">New Arrivales</h2>
          </Row>
          <Row className="p-md-5 mx-5 mt-4">
            <Col lg={3}  xs={6} className="mb-2">
              <Image src="./images/ar1.jpg" fluid className="arimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
              <span className="d-flex text-start arrivalname">Bicycle Gloves Blue</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
            </Col>
            <Col lg={3}  xs={6} className="mb-2">
              <Image src="./images/ar2.jpg" fluid className="arimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
              <span className="d-flex text-start arrivalname">Kryo X26 MTB – Model X</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
            </Col>
            <Col lg={3}  xs={6} className="mb-2">
              <Image src="./images/ar3.jpg" fluid className="arimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
              <span className="d-flex text-start arrivalname">Kryo X26 MTB – Model Y</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
            </Col>
            <Col lg={3}  xs={6} className="mb-3">
              <Image src="./images/ar4.jpg" fluid className="arimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
              <span className="d-flex text-start arrivalname">Kryo X26 MTB – Model Z</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
            </Col>
          </Row>
        </Container>
      </div>
       {/* -----------------------------------------------Section3 Mountain Bike----------------------------------------------------------- */}
      <div className="mountimg">
        <Container fluid>
          <Row>
            <Col lg={6} >
              <Container>
                <Row className="mounthead mt-5">
                  <div className="">
                    <h4 className="mounttitle">
                      Discover The Collection</h4>
                  </div>
                  <div className="">
                    <h1 className="mounttitle2">Mountain Bikes</h1>
                  </div>
                  <div>
                    <p className="text-white mountitle3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                  </div>
                  <Col lg={6}>
                    <div>
                      <ul className="list-unstyled text-white">
                        <li>
                          <span><i class="fa-solid fa-bullseye"></i> &nbsp;Officia deserunt mollit</span>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Excepteur sint occaecat</span>
                          </li>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Sunt in culpa qui</span>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <ul className="list-unstyled text-white">
                        <li>
                          <span><i class="fa-solid fa-bullseye"></i> &nbsp;Officia deserunt mollit</span>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Excepteur sint occaecat</span>
                          </li>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Sunt in culpa qui</span>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <div>
                    <Form className="d-flex justify-content-start">
                      <Button style={{ backgroundColor: "#DF453E" }} className='btn rounded-0 navhome d-flex border-0'>Explore Now</Button>
                    </Form>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
   {/* -----------------------------------------------Section4 Mountain Bike 2----------------------------------------------------------- */}
      <div className="mountimg2">
        <Container fluid>
          <Row>
            <Col lg={6} >
              <Container>
                <Row className="mounthead mt-5">
                  <div className="">
                    <h4 className="mounttitle">
                      Discover The Collection</h4>
                  </div>
                  <div className="">
                    <h1 className="mounttitle2">City Bikes</h1>
                  </div>
                  <div>
                    <p className="text-white mountitle3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                  </div>
                  <Col lg={6}>
                    <div>
                      <ul className="list-unstyled text-white">
                        <li>
                          <span><i class="fa-solid fa-bullseye"></i> &nbsp;Officia deserunt mollit</span>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Excepteur sint occaecat</span>
                          </li>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Sunt in culpa qui</span>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <ul className="list-unstyled text-white">
                        <li>
                          <span><i class="fa-solid fa-bullseye"></i> &nbsp;Officia deserunt mollit</span>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Excepteur sint occaecat</span>
                          </li>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Sunt in culpa qui</span>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <div>
                    <Form className="d-flex justify-content-start">
                      <Button style={{ backgroundColor: "#DF453E" }} className='btn rounded-0 navhome d-flex border-0'>Explore Now</Button>
                    </Form>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
        {/* -----------------------------------------------Section5 Mountain Bike 3----------------------------------------------------------- */}
        <div className="mountimg3">
        <Container fluid>
          <Row>
            <Col lg={6} >
              <Container>
                <Row className="mounthead mt-5">
                  <div className="">
                    <h4 className="mounttitle">
                      Discover The Collection</h4>
                  </div>
                  <div className="">
                    <h1 className="mounttitle2">Speciality Bikes</h1>
                  </div>
                  <div>
                    <p className="text-white mountitle3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
                  </div>
                  <Col lg={6}>
                    <div>
                      <ul className="list-unstyled text-white">
                        <li>
                          <span><i class="fa-solid fa-bullseye"></i> &nbsp;Officia deserunt mollit</span>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Excepteur sint occaecat</span>
                          </li>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Sunt in culpa qui</span>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <ul className="list-unstyled text-white">
                        <li>
                          <span><i class="fa-solid fa-bullseye"></i> &nbsp;Officia deserunt mollit</span>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Excepteur sint occaecat</span>
                          </li>
                          <li><span><i class="fa-solid fa-bullseye"></i> &nbsp;Sunt in culpa qui</span>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <div>
                    <Form className="d-flex justify-content-start">
                      <Button style={{ backgroundColor: "#DF453E" }} className='btn rounded-0 navhome d-flex border-0'>Explore Now</Button>
                    </Form>
                  </div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
        {/* -----------------------------------------------Section6 Explore----------------------------------------------------------- */}
    <div>
        <Container fluid >
          <Row>
            <h2 className="accessories">Explore Accessories</h2>
          </Row>
          <Row className="p-md-5 mx-5 mt-4">
            <Col lg={3}  xs={6} className="mb-2">
              <Image src="./images/g1.jpg" fluid className="accimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Accessories</span>
              <span className="d-flex text-start accname">Bicycle Gloves Blue</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$27.00 - $35.00</span>
              <Label.Group className="d-flex mt-2">
                <Label className='explorelabel'>L</Label>
                <Label className='explorelabel'>M</Label>
                <Label className='explorelabel'>XL</Label>
              </Label.Group>
            </Col>
            <Col lg={3}  xs={6} className="mb-2">
              <Image src="./images/g2.jpg" fluid className="accimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Accessories</span>
              <span className="d-flex text-start accname">Bicycle Gloves Gold</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$30.00 - $50.00</span>
              <Label.Group className="d-flex mt-2">
                <Label className='explorelabel'>L</Label>
                <Label className='explorelabel'>M</Label>
                <Label className='explorelabel'>XL</Label>
              </Label.Group>
            </Col>
            <Col lg={3}  xs={6} className="mb-2">
              <Image src="./images/g3.jpg" fluid className="accimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Accessories</span>
              <span className="d-flex text-start accname">Bicycle Gloves Pink</span>
              <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$25.00 - $32.00</span>
              <Label.Group className="d-flex mt-2">
                <Label className='explorelabel'>L</Label>
                <Label className='explorelabel'>M</Label>
                <Label className='explorelabel'>XL</Label>
              </Label.Group>
            </Col>
            <Col lg={3}  xs={6} className="mb-3">
              <Image src="./images/g4.jpg" fluid className="accimg"></Image>
              <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Accessories</span>
              <span className="d-flex text-start accname">Bicycle Gloves Red</span>
              <span className="d-flex text-start" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$145.00 - $165.00</span>
              <Label.Group className="d-flex mt-2">
                <Label className='explorelabel'>L</Label>
                <Label className='explorelabel'>M</Label>
                <Label className='explorelabel'>XL</Label>
              </Label.Group>
            </Col>
          </Row>
        </Container>
      </div>
            {/* -----------------------------------------------Section End----------------------------------------------------------- */}
            <div className="mountimg4">
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
    </>
   
  )
}

export default Landing