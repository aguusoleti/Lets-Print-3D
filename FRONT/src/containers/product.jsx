//rsc
import React from "react";
import { useEffect, useState } from 'react';
import CardsProducts from '../components/CardsProducts';
import axios from 'axios';
import '../styles/Styles.scss'

// const API = 'https://api.escuelajs.co/api/v1/products';
const API = 'http://localhost:5000/api/product/searchAll'

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(async ()=>{
const response = await axios (API);
setProducts(response);
  }, [])

  return (
   <section className="main-container">
    <div className="cards-container">
    {products.map(e => (
          <CardsProducts />
        ))}
    </div>
   </section>
  );
};

export default Products;
