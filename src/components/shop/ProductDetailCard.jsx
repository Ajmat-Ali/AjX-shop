import React, { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../../utils/constant";
export const ProductDetailCard = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  const fetchSingleProduct = async (PRODUCTS_URL) => {
    const res = await fetch(`${PRODUCTS_URL}/1`);
    const json = await res.json();
    setSingleProduct(json);
  };

  useEffect(() => {
    fetchSingleProduct(PRODUCTS_URL);
  }, []);
  console.log(singleProduct);
  return;
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="bg-gray-100 p-8 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 space-y-6">
          <button
            onClick={onBack}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            ← Back to products
          </button>

          <div className="space-y-2">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
              {category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-indigo-600">₹{price}</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm">
              ⭐ {rating.rate} / 5
            </span>
          </div>

          <div className="border-t pt-6 space-y-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition">
              Add to Cart
            </button>
            <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 rounded-xl text-lg font-semibold transition">
              Buy Now
            </button>
          </div>

          <p className="text-xs text-gray-400">Product ID: {id}</p>
        </div>
      </div>
    </div>
  );
};
