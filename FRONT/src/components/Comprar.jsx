import React, { useContext } from "react";
import "../styles/Styles.scss";
import AppContext from "../context/AppContext";
import flechita from "@icons/flechita.svg";
import product from "@products/2.jpeg";
import close from "@icons/icon_close.png";
import OrderItem from "../components/OrderItem.jsx";

const Comprar = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () =>{
    const reducer = (acumulador, current) => acumulador + current.precio;
    const sum = state.cart.reduce(reducer, 0);
    return sum
  }
  return (
    <aside className="product-detail">
      <div className="miCarrito">
        <div className="miCarrito-container">
          <div className="title-container">
            <img src={flechita} alt="arrow" />
            <p className="title">Mi carrito</p>
          </div>
          <div className="shopping-cart ">
          <div className="miCarrito-content">
            {state.cart.map((product) => (
              <OrderItem
              product={product}
              key={`orderItem-${product.id}`}
              />
              ))}
            <div className="order">
              <p>
                <span>TOTAL</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
              </div>
          <div></div>
        </div>
      </div>
    </aside>
  );
};

export default Comprar;
