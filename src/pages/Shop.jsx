import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../utils/constant";
import { ProductsContext } from "../context/createContext";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async (PRODUCTS_URL) => {
    try {
      const res = await fetch(PRODUCTS_URL);
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts(PRODUCTS_URL);
  }, []);

  return (
    <div className="flex">
      <SideBar />
      <ProductsContext.Provider value={products}>
        <ShopContent />
      </ProductsContext.Provider>
    </div>
  );
};
export default Shop;
