import * as React from 'react';
import Footer from '../../components/Footer/Footer.js';
import AppBar from "../../components/Navbar/AppBar.js";
import Insumos from "../../containers/Insumos/Insumos.js";

function HomePage() {
    return (
    <div>

     <AppBar/> 

     <Insumos />
     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage