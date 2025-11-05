"use client"


import React, { createContext, useContext, useState } from "react";
 
 export const CartProductsContext =  createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartProductsContext.Provider value={{ setCart, cart }}>
      {children}
    </CartProductsContext.Provider>
  );
};

export default CartProvider;


export const useCart = () => useContext(CartProductsContext)