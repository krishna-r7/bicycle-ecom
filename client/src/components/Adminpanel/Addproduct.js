import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './admin.css';
import Footeradmin from './Footeradmin';
import Topnav from './Topnav';


export default function Addproduct() {
    const [product, setProduct] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo') {
            const reader = new FileReader();
            reader.onload = () => {
                const base64Image = reader.result;
                setProduct({
                    ...product,
                    photo: base64Image,
                });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setProduct({
                ...product,
                [name]: value,
            });
        }
    };
    console.log(product);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/addproduct', { product }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = response.data;
            console.log(data);
            if(data != ''){
                toast.success("Uploaded Successfull")
            }
            else{
                toast.error("Upload Failed");
            }
        } catch (error) {
            
            toast.error('Product Upload Failed:', error);
            
        }
    };


    return (
        <>
            <Topnav />
            <div className="d-flex justify-content-center">
                <Container fluid className='d-flex justify-content-center py-1'>
                    <Row className='productbgbox p-5'>
                        <Form className='w-100' onSubmit={handleSubmit}>
                            <Form.Label className='d-flex'>Product Name</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="text" placeholder="Product Name" name="productname" className='py-3 rounded-0' onChange={handleChange} value={product.productname} />
                            </Form.Group>
                            <Form.Label className='d-flex'>Product Price</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="number" placeholder="Product Price" className='py-3 rounded-0' name="productprice" onChange={handleChange} value={product.productprice} />
                            </Form.Group>
                               <Form.Label className='d-flex'>Product Category</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Select className='py-3 rounded-0' name="productcategory" onChange={handleChange} value={product.productcategory}>
                                    <option value="" disabled>Select Category</option>
                                    <option value="Bicycles">Bicycles</option>
                                    <option value="Accessories">Accessories</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Label className='d-flex'>Product Image</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="file" placeholder="Product Image" className='py-3 rounded-0' name="photo" onChange={handleChange} />
                            </Form.Group>
                            <Button type="submit" className='rounded-0 btn-lg btn-dark'>Add Product</Button>
                        </Form>
                        <hr className='mt-4'></hr>
                    </Row>
                </Container>
            </div>
            <div className=' fixed-bottom '>
                <Footeradmin />
            </div>

        </>
    )
}


{/* <div style={{ backgroundColor: "#F7F7F7" }}>
                <Container>
                    <Row>
                        <Col lg={6} md={4} className='py-5 mt-5'>
                            <Form className='w-100'>
                                <Form.Label className='d-flex'>Product Name</Form.Label>
                                <Form.Group className="mb-4">
                                    <Form.Control type="text" placeholder="Product Name" name="pname" className='py-3 rounded-0 ' />
                                </Form.Group>
                                <Form.Label className='d-flex'>Product Price</Form.Label>
                                <Form.Group className="mb-4">
                                    <Form.Control type="number" placeholder="Product Price" className='py-3 rounded-0' name="proprice" />
                                </Form.Group>
                                <Form.Label className='d-flex'>Product Image</Form.Label>
                                <Form.Group className="mb-4">
                                    <Form.Control type="file" placeholder="Product Image" className='py-3 rounded-0' name="proimg" />
                                </Form.Group>
                                <Button type="submit" className='rounded-0 btn-lg btn-dark'>Add Product</Button>
                            </Form>
                            <hr className='mt-4'></hr>
                        </Col>
                        <Col lg={6} md={4} className="p-5 d-flex justify-content-center align-items-center">
                            <div>
                                <Image src="./images/ar1.jpg" fluid className="productimg"></Image>
                                <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
                                <span className="d-flex text-start Productname">Kryo X26 MTB – Model K</span>
                                <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div> */}


