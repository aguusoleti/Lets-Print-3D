import React, { useContext } from "react";
import "../styles/Styles.scss";
import AppContext from "../context/AppContext";
import carrito from "@icons/bt_add_to_cart.svg";
import bob from "@products/bob.jpeg";

const ProductsStock = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = item => {
    addToCart(item);
  };

  return (
    <div className="product-container">
      <img src={bob} alt={product.nombre} />
      <div className="product-info">
        <div>
          <p>{product.nombre}</p>
          <p>${product.precio}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={carrito} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductsStock;

// ----------------------pruebas con la api de platzi

// <div className="product-container">
//   <img src={product.images} alt={product.title} />
//   <div className="product-info">
//     <div>
//       <p>{product.title}</p>
//       <p>${product.price}</p>
//     </div>
//     <figure onClick={handleCart} >
//       <img src={addToCart} alt />
//     </figure>
//     {cart}
//   </div>

// </div>)
