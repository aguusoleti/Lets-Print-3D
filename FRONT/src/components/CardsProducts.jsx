
import React, {useState} from "react";
import '../styles/Styles.scss';

import product from '@products/bob.jpeg';
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductsStock = () => {

  const handleCart = () =>{
    setCart ('Hola mundo');
  }

  const [cart, setCart] = useState ([]); 

  return (

  <div className="product-container">
    <img src={product} alt='producto' />
    <div className="product-info">
      <div>
        <p>$2000,00</p>
        <p>Tazon Bob Esponja</p>
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
