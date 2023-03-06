import * as React from 'react';
import Footer from '../../components/Footer/Footer.js';
import AppBar from "../../components/Navbar/AppBar.js";
import Mas from "../../containers/Mas/Mas.js";

function HomePage() {
    return (
    <div>

     <AppBar/> 

     <Mas />
     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage