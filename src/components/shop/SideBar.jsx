import { IoSearchOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/shop/productsContext";
import { FillStart } from "../FillStart";
import { LuSquareChevronRight } from "react-icons/lu";
import { LuSquareChevronLeft } from "react-icons/lu";

const SideBar = () => {
  const {
    query,
    dispatch,
    draftFilter: {
      minRating: { rating_5, rating_4, rating_3 },
      priceRange: { min, max },
    },
    setDraftFilter,
    handleApplyFilter,
  } = useContext(ProductsContext);
  const [show, setShow] = useState(true);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SEARCH",
      data: {
        key: name,
        value: value,
      },
    });
  };

  const handleCategory = (value) => {
    dispatch({
      type: "CATEGORY",
      data: {
        key: "category",
        value: value,
      },
    });
  };

  const handleRating = (e) => {
    const { id, value, checked } = e.target;
    setDraftFilter((pre) => {
      return {
        ...pre,
        minRating: {
          ...pre.minRating,
          [id]: checked,
        },
      };
    });
  };

  const handleRange = (e) => {
    const { value } = e.target;
    setDraftFilter((pre) => ({
      ...pre,
      priceRange: { ...pre.priceRange, ["max"]: Number(value) },
    }));
  };

  const handleShowHide = () => {
    setShow(!show);
  };

  return (
    // {!show ? "hidden" : "w-0 p-0"}
    <div>
      {!show && (
        <button
          onClick={handleShowHide}
          className="absolute top-6- mt-6 ml-3 z-2000 bg-gray-300 rounded-lg p-2 text-teal-600"
        >
          <LuSquareChevronRight size={30} />
        </button>
      )}

      <aside
        className={`   h-screen- max-lg:absolute z-100  ${show ? "w-64" : "w-0 "}`}
      >
        <div
          className={`bg-white rounded-xl shadow-sm  h-full overflow-y-auto  ${show ? "p-6" : "p-0"}`}
        >
          <div className="mb-6 flex justify-between">
            <h2 className="text-xl font-bold ">Filters</h2>
            <button onClick={handleShowHide} className="text-teal-600">
              <LuSquareChevronLeft size={30} />
            </button>
          </div>

          <div className="mb-6 ">
            <h3 className="font-medium mb-3">Search</h3>
            <div className="relative">
              <input
                type="text"
                name="search"
                value={query.search}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span className="absolute left-3 top-3 text-gray-400 w-4 h-4">
                <IoSearchOutline />
              </span>
            </div>
          </div>

          {/* <!-- Categories --> */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Categories</h3>
            <ul className="space-y-2">
              <li
                onClick={() => {
                  handleCategory("all");
                }}
              >
                <span className=" text-gray-600 hover:text-indigo-600">
                  All Categories
                </span>
              </li>
              <li
                onClick={() => {
                  handleCategory("electronics");
                }}
              >
                <span className="text-gray-600 hover:text-indigo-600">
                  Electronics
                </span>
              </li>
              <li
                onClick={() => {
                  handleCategory("men's clothing");
                }}
              >
                <span className="text-gray-600 hover:text-indigo-600">
                  Men's clothing
                </span>
              </li>
              <li
                onClick={() => {
                  handleCategory("jewelery");
                }}
              >
                <span className="text-gray-600 hover:text-indigo-600">
                  Jewelery
                </span>
              </li>
              <li
                onClick={() => {
                  handleCategory("women's clothing");
                }}
              >
                <span className="text-gray-600 hover:text-indigo-600">
                  Women's clothing
                </span>
              </li>
            </ul>
          </div>

          {/* <!-- Price Range --> */}
          <div className="mb-6 ">
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">$0</span>
              <span>{max}</span>
              <span className="text-sm text-gray-600">$1000</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={max}
              onChange={handleRange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* <!-- Rating --> */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Rating</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  onChange={handleRating}
                  checked={rating_5}
                  type="checkbox"
                  id="rating_5"
                  className="mr-2"
                />
                <label htmlFor="rating-5" className="flex items-center">
                  <div className="flex text-yellow-400">
                    <FillStart count={5} />
                  </div>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={handleRating}
                  checked={rating_4}
                  type="checkbox"
                  id="rating_4"
                  className="mr-2"
                />
                <label htmlFor="rating-4" className="flex items-center">
                  <div className="flex text-yellow-400">
                    <FillStart count={4} />
                    <span className="w-4 h-4">
                      <IoMdStarOutline size={20} />
                    </span>
                  </div>
                  <span className="text-gray-600 ml-1">& Up</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={handleRating}
                  checked={rating_3}
                  type="checkbox"
                  id="rating_3"
                  className="mr-2"
                />
                <label htmlFor="rating-3" className="flex items-center">
                  <div className="flex text-yellow-400">
                    <FillStart count={3} />
                    <span className="w-4 h-4">
                      <IoMdStarOutline size={20} />
                    </span>
                    <span className="w-4 h-4">
                      <IoMdStarOutline size={20} />
                    </span>
                  </div>
                  <span className="text-gray-600 ml-1">& Up</span>
                </label>
              </div>
            </div>
          </div>

          <button
            onClick={handleApplyFilter}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Apply Filters
          </button>
        </div>
      </aside>
    </div>
  );
};
export default SideBar;
