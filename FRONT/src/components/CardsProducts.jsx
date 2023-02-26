
import React, {useState} from "react";
import '../styles/Styles.scss';

import bob from '@products/bob.jpeg';
import addToCart from '@icons/bt_add_to_cart.svg'

const ProductsStock = ({product}) => {
  const [cart, setCart] = useState ([]); 

  const handleCart = () =>{
    setCart ('Hola mundo');
  }


  return (

  // <div className="product-container">
  //   <img src={product.images[0]} alt={product.title} />
  //   <div className="product-info">
  //     <div>
  //       <p>{product.name}</p>
  //       <p>${product.price}</p>
  //     </div>
  //     <figure onClick={handleCart} >
  //       <img src={addToCart} alt />
  //     </figure>
  //     {cart}
  //   </div>
    
  // </div>)

  // ----------------------pruebas

 <div className="product-container">
    <img src={bob} alt={product.nombrre} />
    <div className="product-info">
      <div>
        <p>{product.nombre}</p>
        <p>${product.precio}</p>
      </div>
      <figure onClick={handleCart} >
        <img src={addToCart} alt />
      </figure>
      {cart}
    </div>
    
  </div> 
  )
};

export default ProductsStock;
