import Header from "./components/Header";
import { Outlet } from "react-router";
import CartProvider from "./context/cart/CartProvider";
import { Toaster } from "react-hot-toast";
import { WishlistProvider } from "./context/wishlist/WishlistProvider";
import { ProductsContext } from "./context/shop/productsContext";
import { useContext } from "react";

export default function App() {
  return (
    <>
      <div className="bg-gray-50 w-11/12 m-auto mt-1 rounded-xl ">
        <Toaster />
        <CartProvider>
          <WishlistProvider>
            <Header />
            <Outlet />
          </WishlistProvider>
        </CartProvider>
      </div>
    </>
  );
}
