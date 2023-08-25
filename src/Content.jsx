/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("https://mini-capstone-api-kul3.onrender.com/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div id="content">
      <ProductsIndex products={products} />
    </div>
  );
}
