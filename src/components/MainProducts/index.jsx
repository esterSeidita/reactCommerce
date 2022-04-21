import "./styles.css";
import { useState, useEffect } from "react";
import {Product} from "../Product";

export const MainProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div className="productsWrapper">
      {products.map((product, index) => <Product key={index} img={product.image} title={product.title} price={product.price}/>)}
  </div>;
};
