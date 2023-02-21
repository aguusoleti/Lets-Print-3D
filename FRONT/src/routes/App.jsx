//rsc

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/global.scss";
import Login from "../components/login.jsx";
import Layout from "../containers/layout.jsx";
import ResetPasword from "../components/ResetPasword";
import Home from "../pages/Home";
import NotFound from "../pages/Notfound";
import DesktopMenu from "../components/DesktopMenu";
import EditMyAccount from "../components/EditMyAccount";
import Inicio from "../containers/inicio";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset-password" element={<ResetPasword />} />
          <Route path="*" element={<NotFound />} />
        <Route exact path="/menu-desk" element={<DesktopMenu/>} />
        <Route exact path="edit-myaccount" element={<EditMyAccount/>}/>
        <Route exact path="/inicio" element={<Inicio/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
