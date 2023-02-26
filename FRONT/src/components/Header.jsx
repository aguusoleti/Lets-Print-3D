//rsc
import React, { useState, useContext } from "react";
import "../styles/Styles.scss";
import Menu from "@components/DesktopMenu";
import Comprar from "./Comprar.jsx"
import Logito from "@logos/logo.jpeg";
import IconMenus from "@icons/icon_menu.svg";
import AppContext from "../context/AppContext";
import shoppingCarts from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setTogle] = useState(false);
  const {state}= useContext(AppContext); //aqui reviso el contexto para revisar el estado inicial, que puede tener productos o estar vacío
  const [toggleOrders, setToggleOrders] = useState(false); // aq cramos la constante pa mosaee tttal de lo quee vamos aapagar, debemos mostrar las ordenes 

  const handleToggle = () => {
    setTogle(!toggle);
  };

  return (
    <nav>
      <img src={IconMenus} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logito} alt="logo" className="nav-logo-2" />
        <ul>
          <li>
            {" "}
            <a href="/">Cerámica</a>
          </li>
          <li>
            {" "}
            <a href="/">Impresión 3D</a>
          </li>
          <li>
            {" "}
            <a href="/">Sublimaciones</a>
          </li>
          <li>
            {" "}
            <a href="/">Madera</a>
          </li>
          <li>
            {" "}
            <a href="/">Novedades</a>
          </li>
          <li>
            {" "}
            <a href="/">Insumos</a>
          </li>
          <li>
            {" "}
            <a href="/">Otros</a>
          </li>
        </ul>
      </div>
      <div className="navbar-rigth">
        <ul>
          <li className="navbar-email" onClick={handleToggle} >
            letsprint@gmail.com
          </li>
          <li className="navbar-shopping-cart"
          onClick={()=>setToggleOrders(!toggleOrders)}>

            <img src={shoppingCarts} alt="carrito" />
            {state.cart.length > 0 ? <div className="cantidad">{state.cart.length}</div> : null }
            {/* // aca valido que si la cart tiene elemmntos mmyores a cero, me los muestre, si no que muestre null */}
          </li>
        </ul>
      </div>
      {toggle && <Menu /> }
      {toggleOrders && <Comprar/>}
      {/* el codigo de arriba verifica que el toggle este en false para verificar que debemos abrir el menu */}
    </nav>
  );
};

export default Header;
