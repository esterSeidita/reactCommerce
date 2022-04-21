import "./styles.css";
import { useState, useEffect } from "react";
import {Product} from "../Product";

export const MainProducts = ({category, searchInput}) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setProductsFiltered(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => category==="Everything" ?  product : product.category === category);
    setProductsFiltered(filtered);
  }, [category])

  useEffect(() => {
    const filtered = products.filter(product => product.title.toLowerCase().includes(searchInput.toLowerCase()));
    setProductsFiltered(filtered);
  }, [searchInput])


  return <div className="productsWrapper">
      {
        productsFiltered.length === 0 ? <p className="noElementWarning">I'm sorry! I didn't find any product &#128532;</p> : productsFiltered.map((product, index) => <Product key={index} img={product.image} title={product.title} price={product.price}/>)
      }
  </div>;
};
