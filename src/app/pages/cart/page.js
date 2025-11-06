"use client";

import CartProductCard from "@/app/components/CartProductCard";
import { CartProductsContext } from "@/app/context/CartProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, setCart } = useContext(CartProductsContext);

  const removeEventListener = (id) => {
    const remaining = cart.filter((item)=> item.id !== id)
 setCart(remaining)
 toast("Product removed from cart")
 
  };

  return (
    <div>
      {" "}
      <CartProductCard cart={cart} removeFromCart={removeEventListener} />
    </div>
  );
};

export default Cart;
