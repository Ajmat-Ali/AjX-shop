import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { useEffect, useMemo, useState, useReducer } from "react";
import { PRODUCTS_URL } from "../utils/constant";
import { ProductsContext } from "../context/createContext";
import { useDebounce } from "../hook/useDebounce";
import useFetch from "../hook/useFetch";
import { initialQuery, filterReducer } from "../utils/filterReducer";
import { useFilteredProducts } from "../hook/useFilteredProducts";

const Shop = () => {
  const { err, loader, products } = useFetch(PRODUCTS_URL);
  const [query, dispatch] = useReducer(filterReducer, initialQuery);

  const [draftFilter, setDraftFilter] = useState({
    minRating: {
      rating_5: false,
      rating_4: false,
      rating_3: false,
    },
    priceRange: {
      min: 0,
      max: 1000,
    },
  });

  const debounceSearch = useDebounce(query.search, 1000);
  const sortedProducts = useFilteredProducts(products, query, debounceSearch);

  const handleApplyFilter = (e) => {
    dispatch({
      type: "APPLYFILTER",
      data: {
        key: "applyFilter",
        value: draftFilter,
      },
    });
  };

  // -------------------------- Context API Value ------------------------------
  const value = {
    products: sortedProducts,
    query,
    dispatch,
    draftFilter,
    setDraftFilter,
    err,
    loader,
    handleApplyFilter,
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
