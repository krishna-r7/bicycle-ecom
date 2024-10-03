// import react, { useState,useEffect } from 'react'
// import '../../style.css'
// import { Button, Nav, Container, Navbar, NavDropdown, Image, Form, Col, Row, Breadcrumb } from 'react-bootstrap';
// import { Route, Link } from 'react-router-dom';
// import axios from 'axios';


// function Rightcycle() {
//   const [productbicycle,setProductBicycle] = useState([]);
//   const [sortingOrder, setSortingOrder] = useState('default');
//   // console.log(productbicycle);

//   useEffect(() => {
//     const Productdata = async () => {
//       try {
//         const response = await axios.get('/fetchproduct', {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const pdata = response.data;
//         // console.log(pdata);
//         setProductBicycle(pdata);
//       } catch (error) {
//         console.error('An error occurred:', error);
//       }
//     };
//     Productdata();
//   }, []);

//   const handleSortingChange = (e) => {
//     const newSortingOrder = e.target.value;
//     setSortingOrder(newSortingOrder);

//     // Trigger sorting based on the selected order
//     if (newSortingOrder === 'lowToHigh') {
//       productbicycle.sort((a, b) => a.productprice - b.productprice);
//     } else if (newSortingOrder === 'highToLow') {
//       productbicycle.sort((a, b) => b.productprice - a.productprice);
//     }
//   };

//   return (
//     <>
//       <div>
//         <Container className='p-5'>
//           <Row className='mt-3 sec1 p-4'>
//             <Col>
//               <div>
//                 <Breadcrumb>
//                   <Breadcrumb.Item active className='fw-bold'>Home</Breadcrumb.Item>
//                   <Breadcrumb.Item active className='fw-bold'>Bicycles</Breadcrumb.Item>
//                 </Breadcrumb>
//               </div>
//               <div>
//                 <h1 className='d-flex bicyclehead'>Bicycles</h1>
//               </div>
//               <div>
//                 <Row>
//                   <Col lg={6} xs={6} className='py-5'>
//                     <p className='d-flex mt-2'>Showing all {productbicycle.length} results</p>
//                   </Col>
//                   <Col lg={6} xs={6} className='py-5'>
//                   <Form.Select onChange={handleSortingChange} value={sortingOrder}>
//             <option value="default">Default Sorting</option>
//             <option value="lowToHigh">Price: Low to High</option>
//             <option value="highToLow">Price: High to Low</option>
//           </Form.Select>
//                   </Col>
//                 </Row>
//               </div>
//               <div>
//                 <Container>
//                   <Row>
//                   {productbicycle && productbicycle.length > 0 ? (
//                     productbicycle.map((product, index) => (

//                   <Col lg={4} xs={6} className="mb-2">
//                       <Image src={product.photo} fluid className="arimg"></Image>
//                       <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>{product.productcategory}</span>
//                       <span className="d-flex text-start arrivalname">{product.productname}</span>
//                       <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>${product.productprice}</span>
//                     </Col>
//                       ))
//                       ) : (
//                         <p>No Bicycles available</p>
//                       )}
//                   </Row>
//                 </Container>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   )
// }

// export default Rightcycle



// {/* <Col lg={4} xs={6} className="mb-2">
//                        <Image src="./images/ar2.jpg" fluid className="arimg"></Image>
//                        <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
//                        <span className="d-flex text-start arrivalname">Kryo X26 MTB – Model X</span>
//                        <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
//                      </Col>
//                      <Col lg={4} xs={6} className="mb-2">
//                        <Image src="./images/ar3.jpg" fluid className="arimg"></Image>
//                        <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
//                        <span className="d-flex text-start arrivalname">Kryo X26 MTB – Model Y</span>
//                        <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
//                      </Col>
//                      <Col lg={4} xs={6} className="mb-3">
//                        <Image src="./images/ar4.jpg" fluid className="arimg"></Image>
//                        <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>Bicycles</span>
//                        <span className="d-flex text-start arrivalname">Kryo X26 MTB – Model Z</span>
//                        <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>$350.00</span>
//                      </Col> */}




import axios from 'axios';
import { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSearchTerm } from '../../redux/searchacc';
import '../../style.css';


function Rightacc() {
  const [productacc, setProductacc] = useState([]);
  // console.log(productacc);

  const searchTerm = useSelector(selectSearchTerm);


  const filteredProducts = productacc.filter((acc) =>
    acc.productname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log("filter", filteredProducts);

  useEffect(() => {
    const Productaccdata = async () => {
      try {
        const response = await axios.get('/fetchaccproductbicycles', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const accdata = response.data;
        // console.log(accdata);
        setProductacc(accdata);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    Productaccdata();
  }, []);

  
  const sortProductsByPrice = (order) => {
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.productprice - b.productprice;
      } else {
        return b.productprice - a.productprice;
      }
    });
    setProductacc(sortedProducts);
  };

  return (
    <>
      <div>
        <Container className='p-5'>
          <Row className='mt-3 sec1 p-4'>
            <Col>
              <div>
                <Breadcrumb>
                  <Breadcrumb.Item active className='fw-bold'>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active className='fw-bold'>Accessories</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <h1 className='d-flex acchead'>Bicycles</h1>
              </div>
              <div>
                <Row>
                  <Col lg={6} xs={6} className='py-5'>
                    <p className='d-flex mt-2'>Showing all {productacc.length} results</p>
                  </Col>
                  <Col lg={6} xs={6} className='py-5'>
                  <Form.Select onChange={(e) => sortProductsByPrice(e.target.value)}>
                    <option>Default Sorting</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                  </Form.Select>
                  </Col>
                </Row>
              </div>
              <div>
                <Container>
                  <Row>
                    {filteredProducts && filteredProducts.length > 0 ? (
                      filteredProducts.map((acc, index) => (
                        <Col lg={4} xs={6} className="mb-2" key={index}>
                          <Link to={`/Cart/${acc._id}`} className='text-decoration-none'>
                            <Image src={acc.photo} fluid className="accimg" />
                          </Link>
                          <span className="d-flex text-secondary mt-1" style={{ fontSize: "12px" }}>{acc.productcategory}</span>
                          <Link to={`/Cart/${acc._id}`} className='text-decoration-none'>
                            <span className="d-flex text-start accname">{acc.productname}</span>
                          </Link>
                          <span className="d-flex" style={{ color: "#4b4f58", fontSize: "14px", fontWeight: "600" }}>${acc.productprice}</span>
                        </Col>
                      ))
                    ) : (
                      <p>No matching Accessories available</p>
                    )}
                 
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Rightacc







