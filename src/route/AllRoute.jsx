import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// -------------------------------------------- Local Import ----------------------------------
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import App from "../App";
import { NotFound } from "../pages/NotFound";
import Cart from "../pages/Cart";
import { SingleProduct } from "../pages/SingleProduct";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import Signin from "../pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:productId", element: <SingleProduct /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <Signin /> },
    ],
  },
]);

const AllRoute = () => {
  return <RouterProvider router={router} />;
};

export default AllRoute;
