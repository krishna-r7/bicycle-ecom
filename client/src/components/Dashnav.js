import react,{useState,useEffect} from 'react'
import '../style.css'
import { Button,Nav,Container,Navbar,NavDropdown,Image,Form,Offcanvas,Row,Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';

function Dashnav({ name, ...props }){
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; 
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const navcolor = {
  //   backgroundColor: '#DF453E',
  // };
  
  // useEffect(() => {
  //   const dropdown = document.querySelector('.nav-item.dropdown');

  //   if (dropdown) {
  //     dropdown.addEventListener('mouseenter', function () {
  //       this.querySelector('.dropdown-menu').classList.add('show');
  //     });

  //     dropdown.addEventListener('mouseleave', function () {
  //       this.querySelector('.dropdown-menu').classList.remove('show');
  //     });
  //   }

  //   return () => {
  //     if (dropdown) {
  //       dropdown.removeEventListener('mouseenter', function () {
  //         this.querySelector('.dropdown-menu').classList.add('show');
  //       });
  //       dropdown.removeEventListener('mouseleave', function () {
  //         this.querySelector('.dropdown-menu').classList.remove('show');
  //       });
  //     }
  //   };
  // }, []);

    return(
        <>
      <div>
        {/* <Navbar expand="lg" style={navcolor} className="fixed-top"> */}
        <Navbar expand="lg" bg="transparent" className={scrolled ? 'd-none' : 'fixed-top'}>
          <Container>
            <Navbar.Brand className='d-flex'><Image src='./images/logo.png' className='logo1 mt-1'></Image></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto p-2">
                <Nav.Link className='text-white ms-2 navhome'><Link to="/" className='navhome'>HOME</Link></Nav.Link>
                {/* <Nav.Link to="/Navcycle" className='text-white ms-2 navhome'><Link to="/" className='navhome'>REGISTRATION</Link></Nav.Link> */}
                  <div className="nav-item dropdown">
                    <Link to="/" className="nav-link navhome text-white ms-2">
                    <Link to="/Signup" className='navhome'>REGISTRATION</Link>
                    </Link>
                    {/* <div className="dropdown-menu shadow-sm rounded-0 border-0 text-bg-light dashnavdrop"> */}
                      {/* <Link to="/Signup" className="dropdown-item dashnavdrop fw-bold ">Public Registration</Link>
                      <Link className="dropdown-item dashnavdrop fw-bold ">Shop Registration</Link> */}
                    {/* </div> */}
                  </div>
                <Nav.Link className='text-white ms-2 navhome'><Link to="/About" className='navhome'>ABOUT US</Link></Nav.Link>
                <Nav.Link className='text-white ms-2 navhome'><Link to="/Contact" className='navhome'>CONTACT</Link></Nav.Link>
              </Nav>
              <Nav>
                <Link to="/login" style={{textDecoration:"none"}}>
                <Form className="d-flex justify-content-center" >
                  <Button variant="outline-light" className='btn rounded-0 navhome d-flex ms-4'>LOGIN</Button>
                </Form>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </>
    )
}

export default Dashnav