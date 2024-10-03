import './App.css';
import toast,{Toaster} from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Main/Index';
import Indexcycle from './components/Bicycles/Indexcycle';
import Indexaccessories from './components/Accessories/Indexacc';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Cart from './components/Bicycles/Cart';
import Viewcart from './components/Bicycles/Viewcart';
import Login from './components/Login';
import Signup from './components/Signup';
import Adminpanel from './components/Adminpanel/Adminpanel';
import Verification from './components/Adminpanel/Verification';
import Profile from './components/Main/Profile';
import Addproduct from './components/Adminpanel/Addproduct';
import Productview from './components/Adminpanel/Productview';
import Checkout from './components/Bicycles/Checkout';
import AllCheckout from './components/Bicycles/AllCheckout';
import Orderslist from './components/Bicycles/Orderslist';


function App() {
  return (
    <div className="App">
      {/* <HomeNavbar /> */}
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Index" element={<Index />} />
          <Route exact path="/Navcycle" element={<Indexcycle />} />
          <Route exact path="/Navaccessories" element={<Indexaccessories />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Cart/:id" element={<Cart />} />
          <Route exact path="/Viewcart" element={<Viewcart />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Adminpanel" element={<Adminpanel />} />
          <Route exact path="/Verification" element={<Verification />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Addproduct" element={<Addproduct />} />
          <Route exact path="/Productview" element={<Productview />} />
          <Route exact path="/Checkout" element={<Checkout />} />
          <Route exact path="/AllCheckout" element={<AllCheckout />} />
          <Route exact path="/Orderslist" element={<Orderslist/>} />
     
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
