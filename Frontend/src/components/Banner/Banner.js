import * as React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

//se usa 

function Banner({ product }) {
console.log(product);
  return (
  <div>

      {product.imageUrls.map((url, index) => (
        <div key={index} >
         <img src={url} alt={product.title} />
        </div>
      ))}
  </div>
 
  );
}

export default Banner;