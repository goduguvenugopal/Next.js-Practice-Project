"use client";

import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsProvider";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { products } = useProducts();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const retrievedCategory = products.map((item) => item.category);
    const removedDuplicates = [...new Set(retrievedCategory)];
    setCategories(removedDuplicates);
  }, [products]);

  return (
    <>

    <h5 className="text-center text-2xl font-bold mt-10">Shop By Category</h5>
      <div className="flex flex-col gap-10 p-3">
        {categories.map((item, index) => (
          <CategoryCard key={index} categoryName={item} />
        ))}
      </div>
    </>
  );
};

export default Category;
