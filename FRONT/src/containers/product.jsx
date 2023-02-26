//rsc
import React from "react";
import CardsProducts from "../components/CardsProducts";
import useGetProducts from "../hooks/useGetProducts";
import "../styles/Styles.scss";

const API = "https://api.escuelajs.co/api/v1/products";
const API2 = "http://localhost:5000/api/product/searchAll";

const Products = () => {
  const products = useGetProducts(API);
  const products2 = useGetProducts(API2);
  return (
    <section className="main-container">
      <div className="cards-container">
        {/* {products.map(product => (
           <CardsProducts product={product} kty={product.id}  />
          //  console.log(product)
    ))} */}

        {/* --------------pruebas------------- */}

        {products2.map((product) => (
          <CardsProducts product={product} key={product.id} />
          //  console.log(product)
        ))}
      </div>
    </section>
  );
};

export default Products;
