import * as React from 'react';
import Footer from '../components/Footer/Footer.js';
import AppBar from "../components/Navbar/AppBar.js";
import Banner from '../components/Banner/Banner.js';
import Home from '../containers/Home/Home.js';


function HomePage() {
    return (
    <div>




     <AppBar/> 
     <Banner/>
     <Home/>
     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage