import * as React from "react";
import Footer from "../../components/Footer/Footer.js";
import AppBar from "../../components/Navbar/AppBar.js";
import Ceramica from "../../containers/Ceramica/Ceramica.js";

function HomePage() {
  return (
    <div>
      <AppBar />
      <Ceramica />
      <Footer />
    </div>
  );
}

export default HomePage;
