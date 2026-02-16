import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// -------------------------------------------- Local Import ----------------------------------
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import App from "../App";
import { NotFound } from "../pages/NotFound";
import { ProductDetailCard } from "../components/shop/ProductDetailCard";
import Cart from "../pages/Cart";
import { SingleProduct } from "../pages/SingleProduct";

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
    ],
  },
]);

const AllRoute = () => {
  return <RouterProvider router={router} />;
};

export default AllRoute;
