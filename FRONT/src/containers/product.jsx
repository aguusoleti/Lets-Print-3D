//rsc
import React from "react";
import '../styles/Styles.scss';
import { useState, useEffect } from 'react';

const BASE_URL = '../../public/data/products.json';

const Products = () => {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);


  return (
    console.log(ProductData)
    // <div id="product">
         
    //  { ProductData.map(product => (
    //     <article className="fotos" key={product.id}>
    //       <img src={product.imagen} alt={`${product.id}, ${product.nombre}`} className="imagen" />
    //       <div className="textoCard">
    //         <div className="nombre">{product.nombre}</div>
    //         <div className="descripcion">{product.descripcion}.</div>
    //       </div>
    //     </article>
    //   ))}
    // </div>
  );
};

export default Products;
