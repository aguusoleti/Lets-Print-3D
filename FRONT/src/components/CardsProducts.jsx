
import React, {useState} from "react";
import '../styles/Styles.scss';

import product from '@products/bob.jpeg';
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductsStock = ({product}) => {
  const [cart, setCart] = useState ([]); 

  const handleCart = () =>{
    setCart ('Hola mundo');
  }


  return (

  <div className="product-container">
    <img src={product.images[0]} alt={product.title} />
    <div className="product-info">
      <div>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
      <figure onClick={handleCart} >
        <img src={addToCart} alt />
      </figure>
      {cart}
    </div>
    
  </div>

  );
};

export default ProductsStock;
