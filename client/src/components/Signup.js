// import react, { useState, useEffect } from 'react'
// import '../style.css'
// import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Row, Col, Breadcrumb } from 'react-bootstrap';
// import { Route, Link } from 'react-router-dom';
// import Dashnav from './Dashnav';
// import Footer from './Main/Footer';
// import axios from 'axios'; 
// import { toast } from 'react-hot-toast';  

 
// export default function Signup() { 
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         gender: '',
//         dob:'',
//         contact: '',
//         district: '',
//         pincode: '',
//         email: '',
//         password: '',
//       });

//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//     };
//     console.log(formData);




//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('/userreg', formData,{
//             headers:{
//                 'Content-Type':'application/json',
//             },
//           });
//         //   const data = response.data;
//         //   console.log(data);
//         if (response.status === 201) {
//             // console.log(response.data);
//             toast.success('Registration successful!');
//           } else {
//             console.warn('Unexpected status code:', response.status);
//           } 
//         } catch (error) {
//           console.error('Registration Failed:', error);
//         } 
//       }; 

//     return (
//         <>
//         <Dashnav/>
//         <div className='loginbg'>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <Row>
//                                 <div className='loginheader'>
//                                     <h1 style={{ fontSize: "48px" }}>Account</h1>
//                                 </div>
//                             </Row>
//                             <Row>
//                                 <div>
//                                     <span style={{ color: "#fff", fontFamily: "sans-serif", fontSize: "16px", cursor: "pointer" }} className='breadlog'>Home / Signup</span>
//                                 </div>
//                             </Row>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//             <div className="d-flex justify-content-center">
//                 <Container fluid className='d-flex justify-content-center py-5'>
//                     <Row className='logbgbox p-5'>
//                         <Form className='w-100' onSubmit={handleSubmit}>
//                             <Form.Group className="mb-4">
//                                 <Form.Control type="text" name="name" placeholder="Enter Name" className='py-3 rounded-0' onChange={handleChange} value={formData.name}/>
//                             </Form.Group>
//                             <Form.Group className="mb-4">
//                                 <textarea
//                                     placeholder="Enter Address"
//                                     className='form-control py-3 rounded-0'
//                                     rows="2"
//                                     name="address"
//                                     onChange={handleChange}
//                                     value={formData.address}
//                                 />
//                             </Form.Group>
//                             <Form.Label className='d-flex'>Gender</Form.Label>
//                             <Form.Group className="mb-4 d-flex" name="gender">
//                                 <Form.Check
//                                     type="radio"
//                                     label="Male"
//                                     name="gender"
//                                     id="male"
//                                     className='ms-2'
//                                     onChange={handleChange}
//                                     checked={formData.gender === 'Male'}
//                                     value="Male"
//                                 />
//                                 <Form.Check
//                                     type="radio"
//                                     label="Female"
//                                     name="gender"
//                                     id="female"
//                                     className='ms-3'
//                                     onChange={handleChange}
//                                     checked={formData.gender === 'Female'}
//                                     value="Female"
//                                 />
//                             </Form.Group>
//                             <Form.Label className='d-flex'>Date of Birth</Form.Label>
//                             <Form.Group className="mb-4">
//                                 <Form.Control type="date" placeholder="Enter Date of Birth" name='dob'  onChange={handleChange} value={formData.dob} className='py-3 rounded-0' />
//                             </Form.Group>
//                             <Form.Group className="mb-4">
//                                 <Form.Control type="number" placeholder="Enter Contact" name='contact'  onChange={handleChange} value={formData.contact}  className='py-3 rounded-0 ' />
//                             </Form.Group>
//                             <Form.Group className="mb-4">
//                                 <Form.Label className='d-flex'>District in Kerala</Form.Label>
//                                 <Form.Control as="select" className='py-3 rounded-0' name="district" onChange={handleChange} value={formData.district} >
//                                     <option value="">Select District</option>
//                                     <option value="Thiruvananthapuram">Thiruvananthapuram</option>
//                                     <option value="Kollam">Kollam</option>
//                                     <option value="Alappuzha">Alappuzha</option>
//                                     <option value="Kottayam">Kottayam</option>
//                                     <option value="Idukki">Idukki</option>
//                                     <option value="Eranakulam">Eranakulam</option>
//                                     <option value="Thrissur">Thrissur</option>
//                                     <option value="Palakkad">Palakkad</option>
//                                     <option value="Malappuram">Malappuram</option>
//                                     <option value="Kozhikode">Kozhikode</option>
//                                     <option value="Wayanad">Wayanad</option>
//                                     <option value="Kannur">Kannur</option>
//                                     <option value="Kasargode">Kasargode</option>
//                                 </Form.Control>
//                             </Form.Group> 
//                             <Form.Group className="mb-4">
//                                 <Form.Control type="number" placeholder="Enter Pincode" className='py-3 rounded-0' name='pincode'  onChange={handleChange} value={formData.pincode} />
//                             </Form.Group>
//                             <Form.Group className="mb-4">
//                                 <Form.Control type="email" placeholder="Enter Email" className='py-3 rounded-0' name='email'  onChange={handleChange} value={formData.email} />
//                             </Form.Group>
//                             <Form.Group className="mb-4">
//                                 <Form.Control type="password" placeholder="Enter Password" className='py-3 rounded-0' name='password'  onChange={handleChange} value={formData.password}   />
//                             </Form.Group>
//                             {/* <Form.Group className="mb-3">
//                                  <Form.Check type="checkbox" label="Show Password" />
//                             </Form.Group> */}
//                             <Button type="submit" className='rounded-0 loginbtn btn-lg btn-dark'>Create</Button>
//                         </Form>
//                         <hr className='mt-4'></hr>
//                         <div>
//                             <Container>
//                                 <Row className='px-0'>
//                                     <Col lg={6} md={12}>
//                                         <span style={{fontSize:"12px"}}><i>Have an Account?</i></span><Link to="/login" reloadDocument className='logfoot ms-2'>Login</Link>
//                                     </Col>
//                                     <Col lg={6} md={12}>
//                                         <Link className='logfoot'>Return to Store</Link>
//                                     </Col>
//                                 </Row>
//                             </Container>
//                         </div>
//                     </Row>
//                 </Container>
//             </div>
//             <Footer/>
//         </>
//     )
// }




import react, { useState, useEffect } from 'react'
import '../style.css'
import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Dashnav from './Dashnav';
import Footer from './Main/Footer';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';


export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = async (formData) => {
        try {
          const response = await axios.post('/userreg',formData,{
            headers:{
                'Content-Type':'application/json',
            },
          });
        //   const data = response.data;
        //   console.log(data);
        if (response.status === 201) {
            // console.log(response.data);
            toast.success('Registration successful!');
          } else {
            console.warn('Unexpected status code:', response.status);
          }
        } catch (error) {
          console.error('Registration Failed:', error);
        }
      };

    return (
        <>
        <Dashnav/>
        <div className='loginbg'>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <div className='loginheader'>
                                    <h1 style={{ fontSize: "48px" }}>Account</h1>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <span style={{ color: "#fff", fontFamily: "sans-serif", fontSize: "16px", cursor: "pointer" }} className='breadlog'>Home / Signup</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="d-flex justify-content-center">
                <Container fluid className='d-flex justify-content-center py-5'>
                    <Row className='logbgbox p-5'>
                        <Form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-4">
                                <Form.Control type="text" name="name" placeholder="Enter Name"    
                                className={`py-3 rounded-0  ${errors.name ? 'is-invalid' : ''}`} 
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: " Please Enter Valid  Name.!  ",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z. ]{1,60}$/,
                                        message: "Please enter a valid name with at most 60 characters and containing only letters, spaces, and dots.",
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "Name cannot exceed 60 characters.",
                                    },
                                })}
                                // onChange={handleChange} 
                                // value={formData.name}
                                />
                                  {errors.name && (
                                    <p className='errors d-flex mt-2'>{errors.name.message}</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <textarea
                                    placeholder="Enter Address"
                                    className={`form-control py-3 rounded-0  ${errors.address ? 'is-invalid' : ''}`} 
                                    rows="2"
                                    name="address"
                                    // onChange={handleChange}
                                    // value={formData.address}
                                    {...register("address", { required: "Please enter your address." })}
                                />
                                 {errors.address && (
                                    <p className='errors d-flex mt-2'>{errors.address.message}</p>
                                )}
                            </Form.Group>
                            <Form.Label className='d-flex'>Gender</Form.Label>
                            <Form.Group className="mb-4 d-flex" name="gender">
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="male"
                                    className='ms-2'
                                    // onChange={handleChange}
                                    // checked={formData.gender === 'Male'}
                                    value="Male"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="female"
                                    className='ms-3'
                                    // onChange={handleChange}
                                    // checked={formData.gender === 'Female'}
                                    value="Female"
                                />
                            </Form.Group>
                            <Form.Label className='d-flex'>Date of Birth</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="date" placeholder="Enter Date of Birth" name='dob' 
                                //  onChange={handleChange} 
                                //  value={formData.dob}
                                {...register("dob", {
                                    required: {
                                        value: true,
                                        message: "Please Enter Valid  Date Of Birth.!  ",
                                    },

                                })}
                                className={`py-3 rounded-0 ${errors.dob ? 'is-invalid' : ''}`} 
                                  />
                                   {errors.dob && (
                                    <p className='errors d-flex mt-2'>{errors.dob.message}</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="number" placeholder="Enter Contact" name='contact' 
                                //  onChange={handleChange} 
                                //  value={formData.contact}
                                {...register("contact", {
                                    required: {
                                        value: true,
                                        message: " Please Enter Valid  Mobile No.!  ",
                                    },
                                    pattern: {
                                        value: /^[6-9][0-9]{9}$/,
                                        message: "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Mobile Number cannot exceed 10 characters.",
                                    },
                                })}
                                className={`py-3 rounded-0  ${errors.contact ? 'is-invalid' : ''}`}
                                   />
                                    {errors.contact && (
                                    <p className='errors d-flex mt-2'>{errors.contact.message}</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className='d-flex'>District in Kerala</Form.Label>
                                <Form.Control as="select"   className={`py-3 rounded-0  ${errors.district ? 'is-invalid' : ''}`}  name="district" 
                                  {...register("district", { required: "Please select a district." })}
                                // onChange={handleChange}
                                //  value={formData.district}
                                  >
                                    <option value="">Select District</option>
                                    <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Alappuzha">Alappuzha</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Eranakulam">Eranakulam</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Palakkad">Palakkad</option>
                                    <option value="Malappuram">Malappuram</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Wayanad">Wayanad</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kasargode">Kasargode</option>
                                </Form.Control>
                                {errors.district && (
                                    <p className='errors d-flex mt-2'>{errors.district.message}</p>
                                )}
                            </Form.Group> 
                            <Form.Group className="mb-4">
                                <Form.Control type="number" placeholder="Enter Pincode"  className={`py-3 rounded-0  ${errors.pincode ? 'is-invalid' : ''}`}  name='pincode'
                                 {...register("pincode", { 
                                    required: "Please enter your pincode.",
                                    pattern: {
                                        value: /^\d{6}$/,
                                        message: "Please enter a valid 6-digit pincode.",
                                    }
                                })}
                                //   onChange={handleChange}
                                //    value={formData.pincode} 
                                   />
                                    {errors.pincode && (
                                    <p className='errors d-flex mt-2'>{errors.pincode.message}</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" placeholder="Enter Email" className={`py-3 rounded-0  ${errors.email ? 'is-invalid' : ''}`} 
                                  name='email'
                                  {...register("email", { 
                                      required: "Please enter your email.",
                                      pattern: {
                                          value: /^\S+@\S+$/i,
                                          message: "Please enter a valid email address.",
                                      }
                                  })} 
                                 
                                // onChange={handleChange} 
                                // value={formData.email} 
                                />
                                  {errors.email && (
                                    <p className='errors d-flex mt-2'>{errors.email.message}</p>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="password" placeholder="Enter Password" className={`py-3 rounded-0  ${errors.password ? 'is-invalid' : ''}`} name='password' 
                                //  onChange={handleChange} 
                                //  value={formData.password}   
                                {...register("password", { required: "Please enter your password." })}
                                 />
                                   {errors.password && (
                                    <p className='errors d-flex mt-2'>{errors.password.message}</p>
                                )}
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                 <Form.Check type="checkbox" label="Show Password" />
                            </Form.Group> */}
                            <Button type="submit" className='rounded-0 loginbtn btn-lg btn-dark'>Create</Button>
                        </Form>
                        <hr className='mt-4'></hr>
                        <div>
                            <Container>
                                <Row className='px-0'>
                                    <Col lg={6} md={12}>
                                        <span style={{fontSize:"12px"}}><i>Have an Account?</i></span><Link to="/login" reloadDocument className='logfoot ms-2'>Login</Link>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Link className='logfoot'>Return to Store</Link>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </>
    )
}