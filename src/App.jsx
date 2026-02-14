import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { CartContext } from "./context/createContext";
import { useCart } from "./hook/useCart";
export default function App() {
  const { cart, addToCart, decreaseQty, removeFromCart, cartState } = useCart();

  /////////////////////////////////// ------------Context API Value-------------- ///////////////////////////////////
  const value = {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    cartState,
  };

  return (
    <>
      <div className="bg-gray-50 w-11/12 m-auto mt-1 rounded-xl ">
        <CartContext.Provider value={value}>
          <Header />
          <Outlet />
        </CartContext.Provider>
      </div>
    </>
  );
}
