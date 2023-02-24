//rsc
import React from "react";
import CardsProducts from '../components/CardsProducts';
import useGetProducts from "../hooks/useGetProducts";
import '../styles/Styles.scss'

const API = 'https://api.escuelajs.co/api/v1/products';

const Products = () => {
const products = useGetProducts(API)
  return (
   <section className="main-container">
    <div className="cards-container">
    {products.map(product => (
          <CardsProducts product={product} kty={product.id}  />
        ))}
    </div>
   </section>
  );
};

export default Products;
