import * as React from "react";
import Footer from "../components/Footer/Footer.js";
import AppBar from "../components/Navbar/AppBar.js";
import Home from "../containers/Home/Home.js";
import ResponsiveAppBarLogin from "../components/Navbar/AppBarLogin.js";

const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : null;

function HomePage() {
  return (
      <div>
      <AppBar />
      <Home />
      <Footer />
    </div>
  );
}

HomePage.suppressHydrationWarning = true;

export default HomePage;
