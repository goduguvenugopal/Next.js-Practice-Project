"use client";

import React from "react";
import CartProvider from "./CartProvider";
import ProductsProvider from "./ProductsProvider";
import { Bounce, ToastContainer } from "react-toastify";

const RootContext = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        theme="dark"
        transition={Bounce}
        limit={1}
        pauseOnHover={false}
        closeOnClick={true}
      />
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </>
  );
};

export default RootContext;
