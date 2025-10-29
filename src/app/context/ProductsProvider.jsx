"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (res.ok) {
          const products = await res.json();
          setProducts(products);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children};
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
