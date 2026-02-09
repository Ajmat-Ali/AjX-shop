import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS_URL } from "../utils/constant";
import { ProductsContext } from "../context/createContext";
import { useDebounce } from "../hook/useDebounce";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState(false);

  const [query, setQuery] = useState({
    sortBy: "new",
    category: "all",
    search: "",
    minRating: 0,
  });

  const debounceSearch = useDebounce(query.search, 1000);

  const getProducts = async (PRODUCTS_URL) => {
    try {
      const res = await fetch(PRODUCTS_URL);
      if (!res.ok) {
        throw new Error("SERVER_ERROR");
      }
      const data = await res.json();
      setProducts(data);
      setLoader(false);
      setErr(false);
    } catch (error) {
      setErr(true);
      setLoader(false);
    }
  };

  useEffect(() => {
    getProducts(PRODUCTS_URL);
  }, []);

  // ------------------------------------------ Sort & Filter Products ----------------------------------
  const sortedProducts = useMemo(() => {
    let result = [...products];
    const search = debounceSearch.trim().toLowerCase();

    if (search) {
      result = result.filter((product) => {
        return product.title.toLowerCase().includes(search);
      });
    }

    switch (query.sortBy) {
      case "asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return result;
  }, [products, query, debounceSearch]);

  // console.log(typeof query.search, query.search, query.search.length);

  // -------------------------- Context API Value ------------------------------
  const value = {
    products: sortedProducts,
    query,
    setQuery,
    err,
    loader,
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <ProductsContext.Provider value={value}>
        <SideBar />
        <ShopContent />
      </ProductsContext.Provider>
    </div>
  );
};
export default Shop;
