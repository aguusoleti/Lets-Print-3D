import React from "react";
import '../styles/Styles.scss';

import flechita from '@icons/flechita.svg';
import product from '@products/2.jpeg';
import close from '@icons/icon_close.png';

const Comprar = () => {
  return (
    <aside className="product-detail">
      <div className="miCarrito">
        <div className="miCarrito-container">
          <div className="title-container">
            <img src={flechita} alt="arrow" />
            <p className="title">Mi carrito</p>
          </div>
          <div className="shopping-cart">
            <figure>
              <img src={product} alt="bob" />
            </figure>
            <p>Tazon</p>
            <p>$2000</p>
            <img src={close} alt="close" />
          </div>
          <div className="shopping-cart">
            <figure>
              <img src={product} alt="bob" />
            </figure>
            <p>Tazon</p>
            <p>$2000</p>
            <img src={close} alt="close" />
          </div>
          <div className="my-order-content">
            <div className="shopping-cart">
              <figure>
                <img src={product} alt="bob" />
              </figure>
              <p>Tazon</p>
              <p>$2000</p>
              <img src={close} alt="close" />
            </div>
            <div className="shopping-cart ">
              <figure>
                <img src={product} alt="bob" />
              </figure>
              <p>Tazon</p>
              <p>$2000</p>
              <img src={close} alt="close" />
            </div>
            <div className="miCarrito-content">
              <div className="order">
                <p>
                  <span>TOTAL</span>
                </p>
                <p>$8.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Comprar;
