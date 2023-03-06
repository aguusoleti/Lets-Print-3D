import * as React from 'react';
import Footer from '../../components/Footer/Footer.js';
import AppBar from "../../components/Navbar/AppBar.js";
import Madera from "../../containers/Madera/Madera.js";

function HomePage() {
    return (
    <div>

     <AppBar/> 
     <Madera />
     <Footer/>

   
    </div>
     )


  }
  
  export default HomePage