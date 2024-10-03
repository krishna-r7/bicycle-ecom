import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../../redux/searchacc';
import '../../style.css';


function Leftacc() {
    const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
  };
  
    return (
        <>
            <div>
                <Container className='p-5'>
                    <Row className='mt-3 sec1'>
                        <Col>
                            <Form className='p-4'>
                                <Row className='align-items-center d-flex'>
                                    <Col lg={10} xs={10} className='px-2'>
                                        <Form.Group>
                                            <Form.Label className='d-flex fw-bold text-secondary '>Search</Form.Label>
                                            <input type='text' className='form-control rounded-0 py-2' placeholder="Search Accessories..."   onChange={handleSearch} />
                                        </Form.Group>
                                    </Col>
                                    <Col className='p-0 mt-2'>
                                        <button className='rounded-0 border-0 d-flex justify-content-start align-item-start py-2 mt-4' style={{ backgroundColor: '#df453e', fontSize: '22px', marginTop: "45px" }}>
                                            <i className='fas fa-angle-right text-white px-2'></i>
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container className='px-5'>
                    <Row className='sec1 '>
                        <Col className='p-3'>
                            <div className='p-3'>
                                <h1 className='sec1head d-flex'>Filter by categories</h1>
                            </div>
                            <div className='d-flex px-4'>
                                <Link to='/Navaccessories' className=' text-decoration-none '><span className='filtercontent'>Accessories</span></Link>
                            </div>
                            <div className='d-flex px-4'>
                            <Link to='/Navcycle' className=' text-decoration-none '><span className='filtercontent'>Bicycles</span></Link>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Leftacc