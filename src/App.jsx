import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import { Outlet } from "react-router";

export default function App() {
  const [auth, setAuth] = useState(true);

  return (
    <>
      <div className="bg-gray-50 w-11/12 m-auto mt-1 rounded-xl ">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
