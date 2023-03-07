import * as React from "react";
import useGetProducts from "../../hooks/useGetProducts.js";

function Banner(){

  const API2 = "http://localhost:5000/api/product/search?category=ceramica";

  const products2 = useGetProducts(API2);
  return(
<section >
  <div className="product-banner">
    {products2.map((e)=>
    <img src={e.imageUrls}
    sx={
      {
    
      }
    }
    ></img>
    )}
  </div>
</section>
  )
}

export default Banner;