import "./styles.css";
import { useState, useEffect } from "react";
import { Product } from "../Product";
import Loading from "../Loading";

export const MainProducts = ({ setCartProduct, category, searchInput }) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // GET The Products From API

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setProductsFiltered(data);
    localStorage.setItem("products", JSON.stringify(data));

    setProducts(data);
    setProductsFiltered(data);
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts().then(() => setIsLoading(false));
  }, []);

  // Filter products by text and category

  useEffect(() => {
    const filtered = products.filter((product) =>
      category === "Everything" ? product : product.category === category
    );
    setProductsFiltered(filtered);
  }, [category]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setProductsFiltered(filtered);
  }, [searchInput]);

  // Add to Cart

  const addProductsInCart = (id) => {
    const item = products.filter((product) => product.id === id);
    setCartProduct((prev) => item.concat(prev))
  };

  return (
    <div className="productsWrapper">
      {isLoading ? (
        <Loading />
      ) : productsFiltered.length === 0 ? (
        <div className="noElementWarning">
          I'm sorry! I didn't find any product &#128532;
        </div>
      ) : (
        productsFiltered.map((product, index) => (
          <Product
            key={index}
            addProductsInCart={addProductsInCart}
            img={product.image}
            title={product.title}
            price={product.price}
            index={product.id}
          />
        ))
      )}
    </div>
  );
};
