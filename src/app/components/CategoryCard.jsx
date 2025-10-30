"use client";

import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsProvider";
import ProductCard from "./ProductCard";

const CategoryCard = ({ categoryName }) => {
  const { products } = useProducts();
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === categoryName
    );

    setFilteredItems(filteredProducts);
  }, [categoryName, products]);

  return (
    <div>
      <h5 className="text-2xl font-bold">{categoryName}</h5>
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex items-center gap-3 mt-2 mb-5">
          {filteredItems.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
