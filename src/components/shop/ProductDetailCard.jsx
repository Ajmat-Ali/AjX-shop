import React, { useContext, useEffect, useState } from "react";
import { PRODUCTS_URL } from "../../utils/constant";
import { Link, useParams } from "react-router";
import ShimmerUI from "../ShimmerUI";
import { ErrorPage } from "../ErrorPage";
import { CartContext } from "../../context/createContext";

export const ProductDetailCard = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState({ errorData: "", flag: false });
  const [imageLoaded, setImageLoaded] = useState(false);

  const { addToCart } = useContext(CartContext);

  const fetchSingleProduct = async (PRODUCTS_URL) => {
    try {
      const res = await fetch(`${PRODUCTS_URL}/${productId}`);
      if (res.status === 404) {
        throw new Error("NOT_FOUND");
      }
      if (!res.ok) {
        throw new Error("SERVER_ERROR");
      }
      const json = await res.json();
      setSingleProduct(json);
      setLoader(false);
      setError({ flag: false, errorData: true });
    } catch (err) {
      setError({ flag: true, errorData: err.message });
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct(PRODUCTS_URL);
  }, [productId]);

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

  if (error.flag) {
    if (error.errorData === "NOT_FOUND") {
      return (
        <ErrorPage
          title="Product Not Found"
          description="This product does not exist or was removed."
        />
      );
    }
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
        <div className="bg-gray-100 p-8 flex items-center justify-center relative">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gray-200 animate-pulse rounded-none" />
            </div>
          )}

          {/* Actual Image */}
          <img
            src={image}
            alt={title}
            onLoad={() => setImageLoaded(true)}
            className={`max-h-[400px] object-contain transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Details Section */}
        <div className="p-8 space-y-6 ">
          <div>
            <Link to={"/shop"}>
              <button className="text-sm text-gray-500 hover:text-gray-800 cursor-pointer">
                ← Back to products
              </button>
            </Link>
          </div>

          <div className="space-y-2 ">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
              {category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 rounded-md text-sm font-semibold">
              ⭐ {rate}
            </span>

            <span className="text-sm text-gray-500">({count} reviews)</span>
          </div>

          <div className="border-t pt-6 space-y-4 ">
            <button
              onClick={() => addToCart(singleProduct)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition cursor-pointer"
            >
              Add to Cart
            </button>
            <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-3 rounded-xl text-lg font-semibold transition cursor-pointer">
              Buy Now
            </button>
          </div>

          <p className="text-xs text-gray-400">Product ID: {id}</p>
        </div>
      </div>
    </div>
  );
};
