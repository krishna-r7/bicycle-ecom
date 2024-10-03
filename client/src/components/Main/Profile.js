import react,{useState,useEffect} from 'react'
import '../../style.css'
import { Button,Nav,Container,Navbar,NavDropdown,Image,Form,Offcanvas,Row,Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Footer from './Footer';
import HomeNavbar from './HomeNavbar';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Profile(){
    // const [userdata,setuserData] = useState({});
    // console.log(userdata);
    const [userdata,setuserData] = useState({
        name: '',
        address: '',
        gender: '',
        dob:'',
        contact: '',
        district: '',
        pincode: '',
    });
    // console.log(userdata);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserData({
          ...userdata,
          [name]: value,
        });
    };
    // console.log(userdata);

    useEffect(()=>{
        fetch('/fetchuserdata')
          .then(response => response.json())
          .then(userdata => {
            setuserData(userdata);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
        },[])

        
const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await axios.post('/updateUser', userdata);
        if (response.status==201) {
          toast.success('User data updated successfully.');
        } else {
          toast.error('Update failed.');
        }
      } catch (error) {
        toast.error('Update failed:', error);
      }
    };
  


    return(
        <>
            <HomeNavbar/>
            <div className='profileeditbg'>
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <div className='loginheader'>
                                    <h1 style={{ fontSize: "48px" }}>Profile</h1>
                                </div>
                            </Row>
                            <Row>
                                <div>
                                    <span style={{ color: "#fff", fontFamily: "sans-serif", fontSize: "16px", cursor: "pointer" }} className='breadlog'>Home / Profile</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="d-flex justify-content-center">
                <Container fluid className='d-flex justify-content-center py-5'>
                    <Row className='logbgbox p-5'>
                        <Form className='w-100' onSubmit={handleSubmit}>
                        <Form.Label className='d-flex'>Name</Form.Label>
                            <Form.Group className="mb-4" >
                                <Form.Control type="text" name="name" placeholder="Enter Name" className='py-3 rounded-0' onChange={handleChange} value={userdata.name}/>
                            </Form.Group>
                            <Form.Label className='d-flex'>Address</Form.Label>
                            <Form.Group className="mb-4">
                                <textarea
                                    placeholder="Enter Address"
                                    className='form-control py-3 rounded-0'
                                    rows="2"
                                    name="address"
                                    value={userdata.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Label className='d-flex'>Gender</Form.Label>
                            <Form.Group className="mb-4 d-flex" name="gender">
                                <Form.Check
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    id="male"
                                    className='ms-2'
                                    value={userdata.gender}
                                    checked={userdata.gender === 'Male'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    id="female"
                                    className='ms-3'
                                    value={userdata.gender}
                                    checked={userdata.gender === 'Female'}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Label className='d-flex'>Date of Birth</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="date" placeholder="Enter Date of Birth" name='dob' className='py-3 rounded-0' onChange={handleChange}  value={userdata.dob} />
                            </Form.Group>
                            <Form.Label className='d-flex'>Contact</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="number" placeholder="Enter Contact" name='contact'   className='py-3 rounded-0' onChange={handleChange} value={userdata.contact}/>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className='d-flex'>District in Kerala</Form.Label>
                                <Form.Control as="select" className='py-3 rounded-0' name="district" value={userdata.district} onChange={handleChange}>
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
                            </Form.Group> 
                            <Form.Label className='d-flex'>Pincode</Form.Label>
                            <Form.Group className="mb-4">
                                <Form.Control type="number" placeholder="Enter Pincode" className='py-3 rounded-0' name='pincode' onChange={handleChange}  value={userdata.pincode} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                 <Form.Check type="checkbox" label="Show Password" />
                            </Form.Group> */}
                            <Button type="submit" name='submit' className='rounded-0 loginbtn btn-lg btn-dark'>Edit Profile</Button>
                        </Form>
                        <hr className='mt-4'></hr>
                    </Row>
                </Container>
            </div>
            {/* <Footer/> */}
        </>
    )
}