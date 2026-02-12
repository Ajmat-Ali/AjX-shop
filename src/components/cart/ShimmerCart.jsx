import React from "react";
import { Link } from "react-router";

export const ShimmerCart = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty 🛒</h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven’t added anything yet.
      </p>
      <Link
        to="/shop"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
};
