import React, { useReducer, useState } from "react";
import { PRODUCTS_URL } from "../../utils/constant";
import { filterReducer, initialQuery } from "../../utils/filterReducer";
import useFetch from "../../hook/useFetch";
import { useFilteredProducts } from "../../hook/useFilteredProducts";
import { useDebounce } from "../../hook/useDebounce";
import { ProductsContext } from "./productsContext";

export const ProductsProvider = ({ children }) => {
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
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
