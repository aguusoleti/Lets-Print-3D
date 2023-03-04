import React from "react";
import "../styles/Styles.scss";
import bob from "@products/bob.jpeg";

const MiCarrito = () => {
  return (
    <div className="miCarrito">
      <div className="miCarrito-container">
        <h1 className="title">Mi carrito</h1>
        <div className="miCarrito-content">
          <div className="order">
            <p>
              <span>fecha: 01/01/01</span>
              <span>4 articulos</span>
            </p>
            <p>$8.000</p>
          </div>
        </div>
        <div className="shopping-cart">
          <figure>
            <img src={bob} alt="bob" />
          </figure>
          <p>Tazon</p>
          <p>$2000</p>
        </div>
        <div className="shopping-cart">
          <figure>
            <img src={bob} alt="bob" />
          </figure>
          <p>Tazon</p>
          <p>$2000</p>
        </div>
        <div className="shopping-cart">
          <figure>
            <img src={bob} alt="bob" />
          </figure>
          <p>Tazon</p>
          <p>$2000</p>
        </div>
        <div className="shopping-cart">
          <figure>
            <img src={bob} alt="bob" />
          </figure>
          <p>Tazon</p>
          <p>$2000</p>
        </div>
      </div>
      <form className="form" action="./8-mi-carrito-2.html">
        <div>
          <input
            type="submit"
            defaultValue="Continuar demostracion"
            className="primary-button"
          />
        </div>
      </form>
    </div>
  );
};

export default MiCarrito;
