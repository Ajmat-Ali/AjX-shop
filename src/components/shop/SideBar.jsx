import { IoSearchOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";

const SideBar = () => {
  return (
    <aside className="w-full md:w-64  h-screen">
      <div className="bg-white p-6 rounded-xl shadow-sm  h-full overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        <div className="mb-6 ">
          <h3 className="font-medium mb-3">Search</h3>
          <div className="relative">
            <input
              type="text"
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
            <li>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                All Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Electronics
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Clothing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Home & Garden
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Beauty
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                Sports
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Price Range --> */}
        <div className="mb-6 ">
          <h3 className="font-medium mb-3">Price Range</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">$0</span>
            <span className="text-sm text-gray-600">$500</span>
          </div>
          <input
            type="range"
            min="0"
            max="500"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* <!-- Rating --> */}
        <div className="mb-6">
          <h3 className="font-medium mb-3">Rating</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="rating-5" className="mr-2" />
              <label htmlFor="rating-5" className="flex items-center">
                <div className="flex text-yellow-400">
                  <span className="w-4 h-4 fill-current">
                    <IoStar className="" />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                </div>
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating-4" className="mr-2" />
              <label htmlFor="rating-4" className="flex items-center">
                <div className="flex text-yellow-400">
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4">
                    <IoMdStarOutline size={20} />
                  </span>
                </div>
                <span className="text-gray-600 ml-1">& Up</span>
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rating-3" className="mr-2" />
              <label htmlFor="rating-3" className="flex items-center">
                <div className="flex text-yellow-400">
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
                  <span className="w-4 h-4 fill-current">
                    <IoStar />
                  </span>
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
