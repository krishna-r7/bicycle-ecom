import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import '../../style.css';
import Footer from '../Main/Footer'; 
import NavBicycle from './Navcycle';
import { toast } from 'react-hot-toast';

export default function Viewcart() {
    const [quantity, setQuantity] = useState(1);
    const [fetchcart, setfetchCart] = useState([]);
    console.log(fetchcart);
    const [totalSum, setTotalSum] = useState(0);
    console.log(totalSum);
    const [deletecart, setdeletecart] = useState('');
    const navigate = useNavigate();

    const handleQuantityChange = (event) => {
        const value = Math.max(1, parseInt(event.target.value, 10) || 1);
        setQuantity(value);
    };

    useEffect(() => {
        let sum = 0;
        fetchcart.forEach((cart) => {
            sum += cart.quantity * cart.joinedCart[0].productprice;
        });
        setTotalSum(sum);
    }, [fetchcart,deletecart]);

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
    }, [deletecart]);

    const handleDelete = async (id) => {

        try {
            const response = await fetch(`/cartdelete/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                
                const data = await response.json();
                setdeletecart(data);
                toast.success('Cart Delete Successful');
                console.log('Cart Delete Successful:', data);
                // productdata();
            } else {
                console.error('Error deleting post:', response.status);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const AllBuypass = () => {
        navigate('/AllCheckout', { state: [ ...fetchcart]});
      };

 



    
//   const Buyall = async () => {
//     try {
//       const response = await axios.get('/buyallproducts');
//       console.log(response);
//     } catch (error) {
//       console.log("An error occurred", error);
//     }
//   };


    return (
        <>
            <NavBicycle />
            <div className='viewcartbg py-5'>
                <Container className='viewcartcon p-5'>
                    <Row>
                        <Col>
                            <h1 className='text-start viewcarthead mb-2'>Cart</h1>
                        </Col>
                    </Row>
                    <Card className="text-center ">
                        <Card.Header>
                            <Row className='p-3'>
                                <Col lg={6} md={6} sm={6} xs={6}>
                                    <span className='tableheadcart'>Product</span>
                                </Col>
                                <Col lg={2} md={6} sm={6} xs={6}>
                                    <span className='tableheadcart'>Price</span>
                                </Col>
                                <Col lg={2} md={3} sm={3} xs={4} className='d-none d-lg-block'>
                                    <span className='tableheadcart'>Quantity</span>
                                </Col>
                                <Col lg={2} md={3} sm={3} xs={4} className='d-none d-lg-block'>
                                    <span className='tableheadcart'>Subtotal</span>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                {fetchcart && fetchcart.length > 0 ? (
                                    fetchcart.map((cart, index) => (
                                        <React.Fragment key={index}>
                                            <Col lg={2} md={2} sm={3} xs={3} className='d-none d-lg-block'>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                <span className='mt-4' onClick={() => handleDelete(cart._id)}>
                                                            <i className="fa fa-times-circle-o iconcart"></i></span>
                                                </div>
                                            </Col>
                                            <Col lg={2} md={6} sm={6} xs={6}>
                                            <Link to={`/Cart/${fetchcart[index].productid}`} className='text-decoration-none'>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                <Image src={cart.joinedCart[0].photo} fluid className='tableconcart ms-2 mt-3' style={{ cursor: "pointer" }} />
                                                </div>
                                                </Link>
                                            </Col>
                                            <Col lg={2} md={2} sm={3} xs={3} className='d-none d-lg-block'>
                                                    <Link to={`/Cart/${fetchcart[index].productid}`} className='text-decoration-none'>
                                                <div className='d-flex align-items-center justify-content-center '>
                                                <span className='ms-2 viewcartpro mt-4' style={{ cursor: "pointer" }}>{cart.joinedCart[0].productname}</span>
                                                </div>
                                                    </Link>
                                            </Col>
                                            <Col lg={2} md={6} sm={6} xs={6} >
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <span className='viewcartpro mt-4'>${cart.joinedCart[0].productprice}</span>
                                                </div>
                                            </Col>
                                            <Col lg={2} md={2} sm={3} xs={3} className='d-none d-lg-block'>
                                                <div className='mt-4 d-flex align-items-center justify-content-center'>
                                                    <span className='viewcartpro'>{cart.quantity}</span>
                                                </div>
                                            </Col>
                                            <Col lg={2} md={2} sm={3} xs={3} className='d-none d-lg-block'>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <span className='viewcartpro mt-4'>${cart.joinedCart[0].productprice}</span>
                                                </div>
                                            </Col>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <p>No Cart available</p>
                                )}
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Row className='p-3'>
                                <div className='d-flex justify-content-end align-items-end'>

                                </div>
                            </Row>
                        </Card.Footer>
                    </Card>




             


                    <Card className='mt-5' style={{ maxWidth: '300px' }}>
                        <Card.Header className='totalcart'>Cart totals</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <span>Subtotal</span>
                                </Col>
                                <Col lg={6}>
                                    <span>${totalSum}</span>
                                </Col>
                            </Row>
                            <hr />

                            <Row>
                                <Col lg={6}>
                                    <span>Total</span>
                                </Col>
                                <Col lg={6}>
                                    <span>${totalSum}</span>
                                </Col>
                            </Row>
                            <hr />

                            <Row className='p-2'>
                               
                                    <Button className='rounded-0 border-0 fw-bold py-3 px-5'  onClick={AllBuypass}  style={{ backgroundColor: '#df453e' }}>
                                        Proceed to checkout
                                    </Button>
                             
                            </Row>
                        </Card.Body>
                    </Card>

                </Container>
            </div>
            <Footer />
        </>
    )
}