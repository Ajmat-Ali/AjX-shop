import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS_URL } from "../utils/constant";
import { ProductsContext } from "../context/createContext";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({
    sortBy: "new",
    category: "all",
    search: "",
    minRating: 0,
  });

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

  // ------------------------------------------ Sort By Feature ----------------------------------
  const sortedProducts = useMemo(() => {
    let result = [...products];
    switch (query.sortBy) {
      case "asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "new":
        result = [...products];
        break;
      default:
        break;
    }

    return result;
  }, [products, query]);

  // console.log(sortedProducts);

  const value = {
    products: sortedProducts,
    query,
    setQuery,
  };

  // console.log("Sort By Feature:--------- ", query);

  return (
    <div className="flex h-screen overflow-hidden border">
      <ProductsContext.Provider value={value}>
        <SideBar />
        <ShopContent />
      </ProductsContext.Provider>
    </div>
  );
};
export default Shop;
