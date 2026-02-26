import React, { useEffect, useMemo } from "react";
import { PRODUCTS_URL } from "../utils/constant";
import useFetch from "../hook/useFetch";
import { useDispatch } from "react-redux";
import { loadProducts } from "../redux/productsSlice";

export const LoadProducts = () => {
  const x = useFetch(PRODUCTS_URL);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts(x));
  }, []);

  return <div>LoadProducts</div>;
};
