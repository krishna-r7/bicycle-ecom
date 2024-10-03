import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Nav, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectCartTerm, setCartTerm } from '../../redux/cartstore';
import '../../style.css';

function HomeNavbar({ name, ...props }){
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [fetchcart, setfetchCart] = useState([]);
  console.log(fetchcart);
  const [totalSum, setTotalSum] = useState(0);
  console.log(totalSum);
  const cartCount = useSelector(selectCartTerm);
  console.log(cartCount);
  const dispatch = useDispatch();
  // console.log(totalSum);
  // console.log(fetchcart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    axios.get(`/selectcart`)
      .then(response => {
        setfetchCart(response.data); 
        dispatch(setCartTerm(response.data.length));
        console.log("done");
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [cartCount]);

  useEffect(() => {
    let sum = 0;
    fetchcart.forEach((cart) => {
      sum += cart.quantity * cart.joinedCart[0].productprice;
    });
    setTotalSum(sum);
  }, [fetchcart]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // You can adjust the value based on when you want the change to happen
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const navcolor = {
  //   backgroundColor: '#DF453E',
  // };
  

  const AllBuypass = () => {
    navigate('/AllCheckout', { state: [ ...fetchcart]});
  };


  const Logout = async () =>{
    try {
     const response = await axios.delete('/logout');
      console.log('Logged out successfully');
      alert(response.data.message);
      navigate('/login');
      
  } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed');
  }
  }
    return(
      <div>
        {/* <Navbar expand="lg" style={navcolor} className="fixed-top"> */}
        <Navbar expand="lg" bg="transparent" className={scrolled ? 'd-none' : 'fixed-top'}>
          <Container>
            <Navbar.Brand className='d-flex'><Image src='./images/logo.png' className='logo1 mt-1'></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto p-2">
                <Nav.Link className='text-white ms-2 navhome'><Link to="/Index" className='navhome'>HOME</Link></Nav.Link>
                <Nav.Link to="/Navcycle" className='text-white ms-2 navhome'><Link to="/Navcycle" className='navhome'>BICYCLES</Link></Nav.Link>
                <Nav.Link className='text-white ms-2 navhome'><Link to="/Navaccessories" className='navhome'>ACCESORIES</Link></Nav.Link>
                <Nav.Link className='text-white ms-2 navhome'><Link to="/Profile" className='navhome'>PROFILE</Link></Nav.Link>
                <Nav.Link className='text-white ms-2 navhome'><Link to="/Orderslist" className='navhome'>ORDERS</Link></Nav.Link>
                {/* <Nav.Link className='text-white ms-2 navhome'><Link to="/Contact" className='navhome'>ORDERS</Link></Nav.Link> */}
              </Nav>
              <Nav>
                <div className='cart-icon-container' onClick={handleShow}>
                  <i className="fas fa-shopping-cart text-white d-none d-lg-block" style={{ cursor: "pointer" }}></i>
                  <span className='navcart ms-2 fw-bold d-flex d-none d-lg-block'>{fetchcart.length}</span>
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="end" {...props}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ fontSize: "18px", fontWeight: "600" }}>Shopping Cart</Offcanvas.Title>
                  </Offcanvas.Header>
                  <hr></hr>
                  <Offcanvas.Body>
                    <div className='h-25'>
                      <div className='overflow-y-auto overflow-x-hidden' style={{height: "50vh"}}>

                      {fetchcart && fetchcart.length > 0 ? (
                    fetchcart.map((cart, index) => (
                      <Row className='mt-3'>
                        <Col lg={2}>
                          <Image src={cart.joinedCart[0].photo} className='offcanvasimg' fluid></Image>
                        </Col>
                        <Col lg={10}>
                          <Row>
                            <div className='d-flex justify-content-between offcontent'>
                             <Link className='text-decoration-none text-dark'><span className='fw-bold'>{cart.joinedCart[0].productname}</span></Link> 
                              <span className='rounded-5 pe-3'><i class="fa fa-times-circle-o"></i></span>
                            </div>
                            <div>
                              <span className='text-secondary'>{cart.quantity} × $ {cart.joinedCart[0].productprice}</span>
                              <span className='text-secondary ms-2'>Size: {cart.size} </span>
                            </div>
                          </Row>
                        </Col>
                      </Row>
                          ))
                          ) : (
                            <p>No Cart available</p>
                          )}
                      </div>
                      </div>
                    <hr className=" offfooter" />
                    <Row>
                      <div className='d-flex justify-content-between'>
                        <span className='fw-bold text-secondary'>Subtotal:</span>
                        <span className='fw-bold text-secondary'>${totalSum}</span>
                      </div>
                    </Row>
                    <hr />
                    <div className='p-2'>
                      <Link className='text-decoration-none' to='/Viewcart'>
                      <Row>
                        <Button className='rounded-0 py-2 mb-3 fw-bold border-0 ' style={{ backgroundColor: '#df453e' }}>VIEW CART</Button>
                      </Row>
                      </Link>
                     
                      <Row>
                        <Button className='rounded-0 py-2 fw-bold border-0 ' onClick={AllBuypass} style={{ backgroundColor: '#df453e' }}>CHECKOUT</Button>
                      </Row>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav>
              <Nav>
                <Form className="d-flex justify-content-center">
                  <Button variant="outline-light" className='btn rounded-0 navhome d-flex ms-4' onClick={Logout}>LOGOUT</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
}

export default HomeNavbar