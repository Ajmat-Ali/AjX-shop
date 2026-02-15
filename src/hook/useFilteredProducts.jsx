import React, { useMemo } from "react";

export const useFilteredProducts = (products, query, debounceSearch) => {
  return useMemo(() => {
    let result = products;
    const search = debounceSearch.trim().toLowerCase();
    const category = query.category;
    // ---------------------- Search ---------------

    if (search) {
      result = result.filter((product) => {
        return product.title.toLowerCase().includes(search);
      });
    }

    // ---------------------- Category ---------------

    if (category && category !== "all") {
      result = result.filter((product) => {
        return product.category === category;
      });
    }

    // ---------------------- Rating ---------------

    let min = 0;
    const {
      minRating: { rating_5, rating_4, rating_3 },
    } = query;
    if (rating_5) min = 5;
    if (rating_4) min = 4;
    if (rating_3) min = 3;

    if (rating_5 || rating_4 || rating_3) {
      result = result.filter((product) => product.rating.rate >= min);
    }

    // ---------------------- Sort ---------------

    switch (query.sortBy) {
      case "asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return result;
  }, [
    products,
    query.sortBy,
    query.category,
    query.minRating,
    query.priceRange,
    debounceSearch,
  ]);
};
