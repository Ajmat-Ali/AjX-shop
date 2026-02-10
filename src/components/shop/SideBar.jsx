import { IoSearchOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";
import { useContext } from "react";
import { ProductsContext } from "../../context/createContext";
import { FillStart } from "../FillStart";

const SideBar = () => {
  const { query, setQuery } = useContext(ProductsContext);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setQuery((pre) => ({ ...pre, [name]: value }));
  };

  const handleCategory = (value) => {
    setQuery((pre) => ({ ...pre, ["category"]: value }));
  };

  const handleRating = (e) => {
    const { id, value, checked } = e.target;
    setQuery((pre) => {
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
    setQuery((pre) => ({
      ...pre,
      priceRange: { ...pre.priceRange, ["max"]: Number(value) },
    }));
  };

  return (
    <aside className="w-full md:w-64  h-screen">
      <div className="bg-white p-6 rounded-xl shadow-sm  h-full overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

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
            <span className="text-sm text-gray-600">$1000</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={query.priceRange.max}
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

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};
export default SideBar;
