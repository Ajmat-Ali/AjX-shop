import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// -------------------------------------------- Local Import ----------------------------------
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);

const AllRoute = () => {
  return <RouterProvider router={router} />;
};

export default AllRoute;
