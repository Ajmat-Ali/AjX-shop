import { useEffect } from "react";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Shop from "./pages/Shop";

export default function App() {
  useEffect(() => {
    console.log("Inside APP useEffect");
  }, []);

  return (
    <>
      <div className="bg-gray-50 w-11/12 m-auto mt-1 rounded-xl">
        <Header />
        {/* <Home/> */}
        <Shop />
        {console.log("Inside APP Render")}
      </div>
    </>
  );
}
