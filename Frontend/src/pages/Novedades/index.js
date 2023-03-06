import * as React from 'react';
import Footer from '../../components/Footer/Footer.js';
import AppBar from "../../components/Navbar/AppBar.js";
import Novedades from "../../containers/Novedades/Novedades.js";

function HomePage() {
    return (
    <div>

     <AppBar/> 

     <Novedades />
     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage