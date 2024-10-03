import axios from 'axios';
import { useEffect, useState } from 'react';
import { Breadcrumb, Button, Col, Container, Image, Row, Toast } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import { setCartTerm } from '../../redux/cartstore';
import '../../style.css';
import Footer from "../Main/Footer";
import NavBicycle from './Navcycle';
import { toast } from 'react-hot-toast';

function Cart({ name, ...props }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);
  const [cart, setCart] = useState({});
  console.log(cart);
  const [cartcheck, setcartcheck] = useState({});
  // console.log(cartcheck);
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity);
  const [magnify, setMagnify] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedSize, setSelectedSize] = useState('');
  // console.log(selectedSize);
  const objcart = { id, quantity, selectedSize, cart };
  console.log(objcart);
  
  const navigate = useNavigate();
 

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    setPosition({ x, y });
  };
  const handleMouseEnter = () => {
    setMagnify(true);
  };
  const handleMouseLeave = () => {
    setMagnify(false);
  };
  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10) || 1);
    setQuantity(value);
  };


  const handleClick = (size) => {
    console.log(`Selected size: ${size}`);
    setSelectedSize(size);
  };


  useEffect(() => {
    axios.get(`/cartproduct/${id}`)
      .then(response => {
        setCart(response.data.cartproduct);
        setcartcheck(response.data.cartcheck)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])



  const navcolor = {
    backgroundColor: '#DF453E',
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const addcart = async () => {
    try {
      const response = await axios.post('/addcart', objcart);
      console.log(response);

      if (response.status === 201) {
        console.log("Add Cart Successfully");
        toast.success("Add Cart Successfully");
        axios.get(`/selectcart`)
          .then(response => {
            dispatch(setCartTerm(response.data.length));
            console.log(response.data.length);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      } else if (response.status === 202) {
        console.log("Cart Already Exist");
        toast.error("Already exist");
      } else {
        console.log("Cart failed");
        toast.error("Cart failed");
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  // const buyproduct = async () => {
  //   try {
  //     const response = await axios.post('/buyproduct', objcart);
  //     console.log(response);
  //     if (response.status === 201) {
  //       console.log("Buy Successfully");
  //       alert("Buy Successfull");
  //     } else if (response.status === 202) {
  //       console.log("Already Exist");
  //       alert("Already exist");
  //     } else {
  //       console.log("Buy failed");
  //       alert("Buy failed");
  //     }
  //   } catch (error) {
  //     console.log("An error occurred", error);
  //   }
  // };

  const buyNowpass = () => {
    navigate('/Checkout', { state: { ...objcart } });
  };


  return (
    <>
      <NavBicycle />

      <div className='py-5 cartbg'>

        <Container className='cartcon p-5'>
          {cart && cart.length > 0 ? (
            cart.map((cartcycle, index) => (
              <>
               {!(cartcheck == '') &&
               <div className='px-5'>
               <Row className='successcart rounded-1 align-items-center'>
                 <Col lg={6}>
                   <div className='d-flex align-items-center'>
                     <i className="fas fa-check-circle me-2" style={{ color: "#4AB866", fontSize: "20px" }}></i>
                     <span>“{cartcycle.productname}” has been added to your cart.</span>
                   </div>
                 </Col>
                 <Col lg={6} className='d-flex justify-content-lg-end justify-content-center'>
                   <span className='p-3'><Link className='text-secondary' to="/Viewcart">VIEW CART</Link></span>
                 </Col>
               </Row>
             </div>
             
                 }
                <Row className='p-3'>
                  <Col lg={6} className='p-4' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className={`magnifier-container ${magnify ? 'magnify' : ''}`} style={{cursor: 'pointer'}}>
                      <div className='magnifier-glass' fluid style={{ background: `url(${cartcycle.photo}) no-repeat`, backgroundSize: '180% 180%', backgroundPosition: `${position.x}% ${position.y}%` }}></div>
                      <Image src={cartcycle.photo} fluid alt='Product Image'></Image>
                    </div>
                    {/* d-none d-lg-block */}
                  </Col>
                  <Col lg={6} xs={12}>

                    <div className='mt-4'>
                      <Breadcrumb>
                        <Breadcrumb.Item active className='cartbread d-none d-md-inline'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active className='cartbread d-none d-md-inline'>Data</Breadcrumb.Item>
                        <Breadcrumb.Item active className='cartbread'>{cartcycle.productname}</Breadcrumb.Item>
                      </Breadcrumb>
                    </div>
                    <div>
                      <Link className='cartl d-flex mb-2'></Link>
                    </div>
                    <div>

                      {/* {!(cartcheck == '') && */}

                        <h1 className='carthead d-flex justify-content-start text-start mt-3'>{cartcycle.productname}</h1>
                      {/* } */}
                    </div>
                    <div className='d-flex flex-column flex-md-row align-items-md-center mt-2'>
                      <span className='cartprize text-secondary mt-2 mt-md-0 mb-1 text-start '>
                        ${cartcycle.productprice}
                      </span>
                      <span className='text-secondary text-start d-none d-lg-block'>&nbsp;& Free Shipping</span>
                    </div>
                    <div>
                      <p className='text-start fw-normal mt-2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br></br> enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris <br></br> nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>

                    <div>
                      {/* <span className='d-flex fw-bold'>Size</span> */}
                      <Label.Group className="d-flex mt-2">
                        <Label
                          className={`explorelabel ${selectedSize === 'S' ? 'selected' : ''}`}
                          onClick={() => handleClick('S')}
                        >
                          S
                        </Label>
                        <Label
                          className={`explorelabel ${selectedSize === 'M' ? 'selected' : ''}`}
                          onClick={() => handleClick('M')}
                        >
                          M
                        </Label>
                        <Label
                          className={`explorelabel ${selectedSize === 'L' ? 'selected' : ''}`}
                          onClick={() => handleClick('L')}
                        >
                          L
                        </Label>
                        <Label
                          className={`explorelabel ${selectedSize === 'XL' ? 'selected' : ''}`}
                          onClick={() => handleClick('XL')}
                        >
                          XL
                        </Label>
                      </Label.Group>
                    </div>
                    <div className='mt-3 d-flex'>
                      <input
                        type="number"
                        className="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        aria-label="Product quantity"
                        size={4}
                        min={1}
                        step={1}
                        style={{ width: '50px', height: "34px" }}
                      />
                      <Button className='rounded-0 border-0 ms-3 fw-bold addbuy' style={{ backgroundColor: '#df453e' }} onClick={addcart}><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</Button>
                      <Button className='rounded-0 border-0 ms-3 fw-bold' onClick={buyNowpass} style={{ backgroundColor: '#df453e' }}><i class="fa-solid fa-bolt"></i> BUY NOW</Button>
                    </div>
                    <hr></hr>
                    <div className='d-flex'>
                      <span className='d-flex align-items-center fw-bold text-secondary'>Category : </span>
                      <Link className='cartlm d-flex'>&nbsp; {cartcycle.productcategory}</Link>
                    </div>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <hr></hr>
                  <span className='d-flex fw-bold des'>Description :</span>
                  <p className='text-start des'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Row>
              </>
            ))
          ) : (
            <p>No product available</p>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}


export default Cart



