"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartProductsContext } from "../context/CartProvider";
import { useProducts } from "../context/ProductsProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ProductCard = ({ id, image, title, description, price }) => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartProductsContext);
  const { products } = useProducts();

  const addItemToCart = (id) => {
    const item = products.find((item) => item.id === id);
    setCart([...cart, item]);
    toast("Item Added to Cart");
  };

  return (
    <>
      
      <div
        key={id}
        onClick={() => {
          router.push(`/pages/products/${id}`);
        }}
        className="bg-white shadow-md w-72 rounded-xl p-4 flex flex-col hover:scale-105 transition-transform"
      >
        <Image
          width={200}
          height={200}
          src={image}
          alt={title}
          className="w-48 h-48 object-contain mb-4"
        />
        <h2 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{description}</p>
        <div className="mt-auto flex justify-between items-center flex-wrap">
          <span className="text-xl font-bold text-blue-600">${price}</span>
          
          {cart.some((item)=>item.id === id) ?
          
           <button
          onClick={(e) => {
             router.push(`/pages/cart`);
            e.stopPropagation();
          }}
          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
          >
          Go to Cart
          </button>
          :
          <button
          onClick={(e) => {
            addItemToCart(id);
            e.stopPropagation();
          }}
          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
          }
        </div>
      </div>
    </>
  );
};

export default ProductCard;
