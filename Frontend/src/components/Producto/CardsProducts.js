import React, { useContext } from "react";
// import "../styles/Styles.scss";
import AppContext from "../../context/AppContext.js";
import {CgShoppingCart} from "react-icons/cg"
import { margin } from "@mui/system";

const CardsProducts = ({ product }) => {
  const { addToCart } = useContext(AppContext);
 

  const handleCart = (item) => {
    addToCart(item);
  };


  return (
    <div className="product-container" style={{backgroundColor:' rgba(186, 178, 178, 0.353)', marginTop:'20px', borderRadius:'40px 40px 10px 10px'}}>
      <img src={product.imageUrls} alt={product.imageUrls} />
      <div className="product-info">
        <div style={{padding:'10px', fontFamily:'Roboto'}}>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleCart(product)} style={{width:'40px', borderRadius:'80%', height:'40px', borderRadius:'80%', marginRight:'10px'}}> <CgShoppingCart style={{width:'28px', height:'30px', marginRight:'px'}}/>
        </figure> 
      </div>
    </div>
  );
};

export default CardsProducts;
