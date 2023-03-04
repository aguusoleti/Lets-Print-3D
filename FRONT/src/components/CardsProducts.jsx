import React, { useContext } from "react";
import "../styles/Styles.scss";
import AppContext from "../context/AppContext";
import carrito from "@icons/bt_add_to_cart.svg";

const ProductsStock = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  // const baseUrl = window.location.origin;
  // const imageUrl = `${baseUrl}/${product.imageSrc}`;

  const handleCart = (item) => {
    addToCart(item);
  };
  // const url =product.image[0].contentType
  // console.log(url)
  console.log(product.image);
  return (
    <div className="product-container">
      <img src={product.image} alt={product.image} />
      <div className="product-info">
        <div>
          <p>{product.name || product.nombre}</p>
          <p>${product.price || product.precio}</p>
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
