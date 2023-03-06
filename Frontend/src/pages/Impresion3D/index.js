import * as React from 'react';
import Footer from '../../components/Footer/Footer.js';
import AppBar from "../../components/Navbar/AppBar.js";
import Impresion3D from "../../containers/Impresion 3D/Impresion3D.js";
      

function HomePage() {
    return (
    <div>

     <AppBar/> 
     <Impresion3D />


     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage