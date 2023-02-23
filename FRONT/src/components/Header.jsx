//rsc
import React from "react";
import '../styles/Styles.scss';

import Logito from '@logos/logo.jpeg';
import IconMenus from '@icons/icon_menu.svg'
import shoppingCarts from '@icons/icon_shopping_cart.svg'

const Header = () => {
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
          <li className="navbar-email">letsprint@gmail.com</li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCarts} alt="carrito" />
            <div className="cantidad">6</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
