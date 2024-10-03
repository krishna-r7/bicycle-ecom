import react, { useState, useEffect } from 'react'
import './admin.css'
import { Button, Nav, Container, Navbar, NavDropdown, Dropdown, Image, Form, Offcanvas, Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Topnav from './Topnav';
import Footeradmin from './Footeradmin';
import toast from 'react-hot-toast';


export default function Productview(){
    const [pview, setpview] = useState([]);
    // console.log(pview);
    const [searchQuery, setSearchQuery] = useState('');
    console.log(pview);

    const handleSearch = () => {
        const filteredData = pview.filter(
          item =>
            item.productname.includes(searchQuery) ||  item.productcategory.includes(searchQuery) 
        );
        setpview(filteredData);
      };

    useEffect(() => {
        const productdata = async () => {
          try {
            const response = await axios.get('/fetchallproduct', {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const pdata = response.data;
            console.log(pdata);
            setpview(pdata);
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }; 
        productdata();
      }, [  ]);

       //Delete Userdata (ADMIN)----------------------------------
       const handleDelete = async (id) => {
         
        try {
          const response = await fetch(`/adminuserdelete/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Admin Delete Successful:', data);
            toast.success("Admin Delete Successfull")
            productdata();
          } else {
            toast.error("Admin Delete unsuccessfull")
            console.error('Error deleting post:', response.status);
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };

    
    return(
        <>
        <Topnav/>
             <div style={{backgroundColor:"#191C24",height:"100%"}}>
        <Container fluid>
          <Row className='p-5'>
            <Col>

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header" style={{backgroundColor:"#191C24"}}>
                    <h5 className='fw-bold text-white'>Products Table</h5>
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
                            <th>Productname</th>
                            <th>Productprice</th>
                            <th>Photo</th>
                            <th>Productcategory</th>
                            <th>Currentdate</th>
                            <th>Total Users:{pview.length}</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                        {pview.map((item,index)=>(
                                    <tr>
                                        <td>{item.productname}</td>
                                        <td>{item.productprice}</td>
                                        <td><img src={`${item.photo}`} style={{ height: '50px' }} /></td>
                                        <td>{item.productcategory}</td>
                                        <td>{item.currentdate}</td>
                                        <td><a className='btn btn-danger' onClick={() => handleDelete(item._id)}><span className='text-white fw-bold'><i class="fa-solid fa-trash"></i></span></a></td>
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