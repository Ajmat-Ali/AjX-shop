import React, { useEffect, useState } from "react";
import { WishlistContext } from "./wishlist";
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || [],
  );
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.filter((item) => {
          return item.id !== product.id;
        });
      }
      return [...prev, { ...product }];
    });
  };

  const wishlistCount = wishlist.length;

  const wishlistValue = {
    addToWishlist,
    wishlist,
    wishlistCount,
  };

  return (
    <WishlistContext.Provider value={wishlistValue}>
      {children}
    </WishlistContext.Provider>
  );
};
