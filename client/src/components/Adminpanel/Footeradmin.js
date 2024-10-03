import { Col, Container, Row } from 'react-bootstrap';
import './admin.css';

export default function Footeradmin(){
    return(
        <div>
            <Container fluid style={{backgroundColor:"#191C24"}}>
                <Row>
                    <Col>
                    <div className='p-3 d-flex justify-content-center '>
                        <span className='d-flex footeradmin'>©<span className='px-1' style={{color:"#df453e",fontSize:"14px",fontWeight:"600"}}> CycleApp (Admin)</span>, All Right Reserved.</span>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}