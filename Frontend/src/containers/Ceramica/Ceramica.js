//rsc
import React from "react";
import CardsProducts from "../../components/Producto/CardsProducts.js";
import useGetProducts from "../../hooks/useGetProducts.js";
// import "../styles/Styles.scss";

const API2 = "http://localhost:5000/api/product/search?category=ceramica";

const Ceramica = () => {
  const products2 = useGetProducts(API2);
  return (
    <section className="main-container">
      <div className="cards-container">
       
        {products2.map((product) => (
          <CardsProducts product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Ceramica;
