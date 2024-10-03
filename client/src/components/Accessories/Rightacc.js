import axios from 'axios';
import { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectSearchTerm } from '../../redux/searchacc';
import '../../style.css';


function Rightacc() {
  const [productacc, setProductacc] = useState([]);
  console.log(productacc);

  const searchTerm = useSelector(selectSearchTerm);


  const filteredProducts = productacc.filter((acc) =>
    acc.productname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("filter", filteredProducts);

  useEffect(() => {
    const Productaccdata = async () => {
      try {
        const response = await axios.get('/fetchaccproduct', {
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
                <h1 className='d-flex acchead'>Accessories</h1>
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







