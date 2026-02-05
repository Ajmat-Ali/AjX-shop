import { useContext, useState } from "react";
import Pagination from "./Pagination";
import ShimmerUI from "./ShimmerUI";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../../context/createContext";

const ShopContent = () => {
  const products = useContext(ProductsContext);

  useState([]);

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 ">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">All Products</h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Highest Rated</option>
            </select>
          </div>
        </div>
      </div>
      {products.length <= 0 && <ShimmerUI />}
      <div className="grid grid-cols-3 gap-x-20 gap-y-20">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Pagination />
    </div>
  );
};
export default ShopContent;
