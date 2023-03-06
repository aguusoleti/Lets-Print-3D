import * as React from 'react';
import Footer from '../../components/Footer/Footer.js';
import AppBar from "../../components/Navbar/AppBar.js";
import Sublimacion from "../../containers/Sublimacion/Sublimacion.js";

function HomePage() {
    return (
    <div>

     <AppBar/> 

     <Sublimacion />
     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage