import Footer from "../Main/Footer";
// import Leftcycle from "./Leftcycle";
import NavBicycle from "./Navcycle";
import Rightcycle from "./Rightcycle";
import {Row,Col, Container} from 'react-bootstrap';
import Leftacc from "../Accessories/Leftacc";




export default function Indexcycle() {
    return (
        <>
        <NavBicycle />
        <div style={{backgroundColor:"#F5F5F5"}}>
        <Container fluid>
        <Row>
            <Col lg={4}>
            <Leftacc />
            </Col>
            <Col lg={8}>
            <Rightcycle />
            </Col>
        </Row>
        </Container>
        </div>
        <Footer />
       
        {/* <Leftcycle /> */}
        {/* <Rightcycle /> */}
        </>
    )
}