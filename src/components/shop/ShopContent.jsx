import { useContext, useState } from "react";
import Pagination from "./Pagination";
import ShimmerUI from "../ShimmerUI";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../../context/shop/productsContext";
import { Link } from "react-router";
import { ErrorPage } from "../ErrorPage";

const ShopContent = () => {
  const { products, query, dispatch, err, loader } =
    useContext(ProductsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SORTBY",
      data: {
        key: name,
        value: value,
      },
    });
  };

  if (loader) {
    return (
      <div className="flex-1 p-8 overflow-y-auto">
        <ShimmerUI
          count={6}
          gridClass={`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
          cardClass="h-96"
        />
      </div>
    );
  }

  if (err) {
    return (
      <div className="flex-1 p-8 overflow-y-auto">
        <ErrorPage
          title={"Something went wrong"}
          description={"Please try again later"}
        />
      </div>
    );
  }

  if (products.length <= 0) {
    return (
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="text-center font-bold text-red-600 text-2xl mt-6">
          No Product Found
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 ">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">
          {query.category.split(" ")[0]} Products
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select
              onChange={handleChange}
              value={query.sortBy}
              name="sortBy"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={"new"}>Newest</option>
              <option value={"asc"}>Price: Low to High</option>
              <option value={"desc"}>Price: High to Low</option>
              {/* <option>Highest Rated</option> */}
            </select>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="grid grid-cols-3 gap-x-20 gap-y-20">
        {products.map((product) => {
          return (
            <Link to={`/shop/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};
export default ShopContent;
