import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

// --------------------------------------- Local Import

import { PRODUCTS_URL } from "../utils/constant";
import useFetch from "../hook/useFetch";
import ShimmerUI from "../components/ShimmerUI";
import { ErrorPage } from "../components/ErrorPage";
import { CartContext } from "../context/cart/cartContext";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const [imageLoaded, setImageLoaded] = useState(false);
  const URL = `${PRODUCTS_URL}/${productId}`;
  const { loader, err, products: singleProduct } = useFetch(URL);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (loader) {
    return (
      <ShimmerUI
        count={1}
        gridClass=" h-screen"
        cardClass="w-8/12 h-96 m-auto  flex items-center justify-center"
        cardContent={"Loading..."}
      />
    );
  }

  if (err) {
    return (
      <ErrorPage
        title="Something went wrong"
        description="Please try again later."
      />
    );
  }

  const {
    id,
    category,
    description,
    title,
    image,
    price,
    rating: { rate, count },
  } = singleProduct;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="bg-gray-100 p-8 flex items-center justify-center relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={`max-h-[420px] object-contain transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          {/* Back */}
          <Link
            to="/shop"
            className="text-sm text-gray-500 hover:text-gray-800 inline-block"
          >
            ← Back to products
          </Link>

          {/* Category + Wishlist */}
          <div className="flex items-center justify-between">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
              {category}
            </span>

            <button
              onClick={() => setIsWishlisted((prev) => !prev)}
              className={`p-2 rounded-full border transition ${
                isWishlisted
                  ? "bg-red-100 border-red-300 text-red-600"
                  : "border-gray-500 text-gray-700 hover:bg-gray-100"
              }`}
              title="Add to wishlist"
            >
              {isWishlisted ? <AiFillHeart size={20} /> : <CiHeart size={20} />}
            </button>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900"></h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 rounded-md text-sm font-semibold">
              ⭐ {rate}
            </span>
            <span className="text-sm text-gray-500">({count} reviews)</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900">₹{price}</p>
            <p className="text-xs text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{description}</p>

          {/* Actions */}
          <div className="border-t pt-6 space-y-4">
            <button
              onClick={() => addToCart(singleProduct)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition"
            >
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
