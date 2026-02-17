import React from "react";

export const WishlistShimmer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-3xl font-semibold">💔 Your wishlist is empty</p>
      <p className="text-gray-500 mt-3">
        Browse products and save your favorites
      </p>

      <button
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        onClick={() => console.log("Navigate to products")}
      >
        Start Shopping
      </button>
    </div>
  );
};
