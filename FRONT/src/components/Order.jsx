import React from "react";
import "../styles/Styles.scss";
import flechita from "@icons/flechita2.png";

const Order = () => {
  return (
    <div className="miCarrito">
      <div className="miCarrito-container">
        <h1 className="title">Mi carrito</h1>
        <div className="miCarrito-content">
          <div className="order-2">
            <p>
              <span>fecha: 01.01.01</span>
              <span>4 articulos</span>
            </p>
            <p>$8.000</p>
            <img src={flechita} alt="flechita" />
          </div>
        </div>
      </div>
      <form className="form" action="./9-navBar.html">
        <div>
          <input
            type="submit"
            defaultValue="Continuar demostracion"
            className="primary-button"/>
        </div>
      </form>
    </div>
  );
};

export default Order;
