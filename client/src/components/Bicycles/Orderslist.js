import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../style.css';
import NavBicycle from './Navcycle';
import Footer from '../Main/Footer';



export default function Orderslist() {
    const [orderItems, setOrderItems] = useState([]);
    console.log(orderItems);



    useEffect(() => {
        const fetchOrderedItems = async () => {
          try {
            const response = await axios.get('/fetchordereditems', {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const orderItems = response.data;
            if (response.status === 200) {
              setOrderItems(orderItems);
              // console.log("Order Success");
            } else {
              console.error('Failed to fetch orders');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        };
        fetchOrderedItems();
      }, []);
    
    return (
        <>
            <NavBicycle />
            <div className='orderbg1 py-5'>
                <Container className='ordercon1 p-5' >
                    <Row>
                        <Col>
                            <h1 className='text-start orderhead1 mb-2'>Orders</h1>
                        </Col>
                    </Row>
                    {orderItems && orderItems.length > 0 ? (
                                    orderItems.map((orderitem, index) => (
                    <Row className='py-4 mt-2' >
                        <Col lg={2} md={3} sm={4} xs={6}>
                            <div>
                                <Image src={orderitem.joinedBuy[0].photo} className='orderimg1'></Image>
                            </div>
                        </Col>
                        <Col lg={4} md={5} sm={4} xs={6} className='d-flex justify-content-center align-items-center'>
                            <div >
                                <h5 className='fw-bold' style={{cursor: 'pointer'}}>{orderitem.joinedBuy[0].productname}</h5>
                                <h5 className='text-secondary' style={{cursor: 'pointer'}}>Quantity : {orderitem.quantity}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={2} sm={12} xs={6} className='d-flex order-lg-2 justify-content-center align-items-center'>
                            <div style={{cursor: 'pointer'}}>
                                <h5>Size : {orderitem.size}</h5>
                            </div>
                        </Col>
                        <Col lg={3} md={2} sm={4} xs={6} className='d-flex justify-content-center align-items-center'>
                            <div style={{cursor: 'pointer'}}>
                                <h5>${orderitem.joinedBuy[0].productprice}</h5>
                            </div>
                        </Col>
                    </Row>
                      ))
                      ) : (
                          <p>No Cart available</p>
                      )}
                </Container>
            </div>
            <Footer/>
        </>
    )
}