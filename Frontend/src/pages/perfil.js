import * as React from "react";
import Footer from "../components/Footer/Footer.js";
import AppBar from "../components/Navbar/AppBar.js";
import Perfil from "../containers/Perfil/Perfil.js";



function HomePage() {
  return (
    <div>
      <AppBar />
      
        <Perfil/>
      <Footer />
    </div>
  );
}

HomePage.suppressHydrationWarning = true;

export default HomePage;
