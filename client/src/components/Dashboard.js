import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../style.css';
import Dashnav from './Dashnav';
import Footer from './Main/Footer';

function Dashboard(){
    return(
        <>
      <div>
     <Dashnav/>
      </div>
      <div className="bannerbg">
      <Container fluid>
        <Row>
          <Col xs={6} >
            <Container>
              <Row className="bannerhead mt-4">
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
                      <li><span><i class="fa-solid fa-bullseye mb-2"></i>&nbsp;Steel Suspension Fork</span>
                      </li>
                      <li><span><i class="fa-solid fa-bullseye mb-2"></i>&nbsp;Steel Hardtail Frame</span>
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
    <Footer/>
      </>
    )
}

export default Dashboard