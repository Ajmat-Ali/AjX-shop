import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import CartProvider from "./context/cart/CartProvider";

export default function App() {
  // const [wishlist, setWishlist] = useState(
  //   () => JSON.parse(localStorage.getItem("wishlist")) || [],
  // );

  // useEffect(() => {
  //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
  // }, [wishlist]);

  // const addToWishlist = (product) => {
  //   setWishlist((prev) => {
  //     const existingProduct = prev.find((item) => item.id === product.id);
  //     if (existingProduct) {
  //       // call remove function
  //       return;
  //     }
  //     return [...prev, { ...product }];
  //   });
  // };

  return (
    <>
      <div className="bg-gray-50 w-11/12 m-auto mt-1 rounded-xl ">
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </div>
    </>
  );
}
