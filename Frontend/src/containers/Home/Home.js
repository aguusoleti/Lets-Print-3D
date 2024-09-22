//rsc
import React from "react";
import Banner from "../../components/Banner/Banner.js";
import CardsProducts from "../../components/Producto/CardsProducts";
import useGetProducts from "../../hooks/useGetProducts.js";
// import "../styles/Styles.scss";

const API2 = "http://localhost:5000/api/product/";

const Home = () => {
  const products2 = useGetProducts(API2);
  return (
    <section>
      <div className="bannerContainer">

   <div className='banner'>
       
       {products2.map((product) => (
         <div >
         <Banner product={product} key={product.id}/>
           </div>
       
       ))}
       </div>
     </div>
      <div className="cards-container">
       
        {products2.map((product) => (
          <div>
            <CardsProducts product={product} key={product.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
