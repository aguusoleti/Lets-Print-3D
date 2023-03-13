import * as React from 'react';
import Footer from '../components/Footer/Footer.js';
import AppBar from "../components/Navbar/AppBar.js";
import Banner from '../components/Banner/Banner.js';
import Home from '../containers/Home/Home.js';
import Validate from '../components/User/Validate.js';

function Login() {
    return (
    <div>
     <AppBar/> 
     <Banner/>
     <Home/>
     <Footer/>
     <Validate/>
    </div>
     )  }
  
  export default Login