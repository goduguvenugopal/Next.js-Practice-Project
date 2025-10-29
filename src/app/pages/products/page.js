"use client";

import React, { useEffect } from "react";
import { useProducts } from "@/app/context/ProductsProvider";
import ProductCard from "@/app/components/ProductCard";

const Products = () => {
  const { products } = useProducts();

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">🛍️ Our Products</h1>

      {/* Responsive grid for product cards */}
      <div className="grid gap-6 grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard
            key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
