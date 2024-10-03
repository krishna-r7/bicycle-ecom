
import NavBicycle from "../Bicycles/Navcycle";
import Footer from "../Main/Footer";
import Leftacc from "./Leftacc";
import Rightacc from "./Rightacc";
import {Row,Col, Container} from 'react-bootstrap';



export default function Indexaccessories(){
    return(
        <>
        <div>
            <NavBicycle />
            <div style={{backgroundColor:"#F5F5F5"}}>
        <Container fluid>
        <Row>
            <Col lg={4}>
            <Leftacc/>
            </Col>
            <Col lg={8}>
            <Rightacc />
            </Col>
        </Row>
        </Container>
        </div>
        <Footer />
    

            
        </div>
        </>
    )
}