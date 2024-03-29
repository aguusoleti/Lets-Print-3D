import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) =>{
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios(API);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [API]);

  return products
};

export default useGetProducts