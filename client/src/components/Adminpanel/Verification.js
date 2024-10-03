import react, { useState, useEffect } from 'react'
import './admin.css'
import { Button, Nav, Container, Navbar, NavDropdown, Dropdown, Image, Form, Offcanvas, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import Topnav from './Topnav';
import Footeradmin from './Footeradmin';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Verification() {
  const [viewdata, setviewData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // console.log(viewdata);

  const handleSearch = () => {
    // Filter the viewdata based on the searchQuery
    const filteredData = viewdata.filter(
      item =>
        item.name.includes(searchQuery) || item.district.includes(searchQuery) || item.address.includes(searchQuery) || item.gender.includes(searchQuery)
    );
    setviewData(filteredData);
  };

  useEffect(() => {
    const Userdata = async () => {
      try {
        const response = await axios.get('/Adminviewuserdata', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const userd = response.data;
        // console.log(userd);
        setviewData(userd);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    Userdata();
  }, []);


  const handleApprove = (userId) => {
    axios.post(`/approveUser/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        toast.success("User approved")
        console.log('User approved:', response.data);
      })
      .catch((error) => {
        toast.error("Error approving user")
        console.error('Error approving user:', error);
      });
  };

  const handleReject = (userId) => {
    axios.post(`/rejectUser/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        toast.success("User Rejected")
        console.log('User Rejected:', response.data);
      })
      .catch((error) => {
        toast.error("Error reject user")
        console.error('Error reject user:', error);
      });
  };


  return (
    <>
      <Topnav />
      <div style={{backgroundColor:"#191C24",height:"100vh"}}>
        <Container fluid>
          <Row className='p-5'>
            <Col>

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header" style={{backgroundColor:"#191C24"}}>
                    <h5 className='fw-bold text-white'>Admin Table</h5>
                  </div>
                  <div className="card-block table-border-style" style={{backgroundColor:"#191C24"}}>
                    <div className="table-responsive">
                      <div className='px-5 py-3 w-50'>
                        <input
                          type="text"
                          className='form-control'
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                        />
                        <button className='btn btn-outline-light mt-2 d-flex' onClick={handleSearch}>Search</button>
                      </div>
                      <table className="table table-hover table-dark table-striped ">
                        <thead>
                          <tr>

                            <th>Name</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Contact</th>
                            <th>District</th>
                            <th>Pincode</th>
                            <th>Email</th>
                            <th>Total Users:{viewdata.length}</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {viewdata.map((item, index) => (
                            <tr>
                              <td>{item.name}</td>
                              <td>{item.address}</td>
                              <td>{item.gender}</td>
                              <td>{item.dob}</td>
                              <td>{item.contact}</td>
                              <td>{item.district}</td>
                              <td>{item.pincode}</td>
                              <td>{item.Joineddatalogreg[0].email}</td>
                              {/* <td><a className='btn btn-primary' onClick={()=>handleApprove(item.loginid)}><span className='text-white fw-bold'>Approve</span></a></td>
                              <td><a className='btn btn-danger'  onClick={()=>handleReject(item.loginid)}><span className='text-white fw-bold'>Reject</span></a></td> */}
                              {item.Joineddatalogreg[0].status === 0 && (
                                <>
                                  <td><a className='btn btn-success' onClick={() => handleApprove(item.loginid)}><span className='text-white fw-bold'>Approve</span></a></td>
                                  <td><a className='btn btn-warning' onClick={() => handleReject(item.loginid)}><span className='text-white fw-bold'>Reject</span></a></td>
                                </>
                              )}
                              {item.Joineddatalogreg[0].status === 1 && (
                                <>
                                  <td><a className='btn btn-primary' disabled ><span className='text-white fw-bold'>Approved</span></a></td>
                                  <td><a className='btn btn-warning' onClick={() => handleReject(item.loginid)}><span className='text-white fw-bold'>Reject</span></a></td>
                                </>
                              )}
                              {item.Joineddatalogreg[0].status === 2 && (
                                <>
                                  <td><a className='btn btn-success' onClick={() => handleApprove(item.loginid)}><span className='text-white fw-bold'>Approve</span></a></td>
                                  <td><a className='btn btn-danger' disabled><span className='text-white fw-bold'>Rejected</span></a></td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </div>
      <div className='fixed-bottom'>
      <Footeradmin/>
      </div>
     
    </>
  )
}