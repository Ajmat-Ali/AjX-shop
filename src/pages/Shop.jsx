import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { useState } from "react";
const Shop = () => {
  const [products, setProducts] = useState([]);
  return (
    <div className="flex">
      <SideBar />
      <ShopContent />
    </div>
  );
};
export default Shop;
