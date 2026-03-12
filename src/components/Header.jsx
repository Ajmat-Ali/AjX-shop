import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoHome } from "react-icons/io5";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const reduxCartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("New Data Ajmat Ji"));
  };
  const handleShowNav = () => {
    setShowNav(true);
  };

  const handleHideNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <header className="bg-white shadow-md rounded-md  p-4 mb-8 flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center sticky top-0 z-100 ">
        <div className=" flex justify-between w-full">
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-blue-500">AjX</span> Shop
          </h1>
          <div>
            {showNav ? (
              <button onClick={handleHideNav} className=" hidden max-md:block ">
                <MdClose size={30} />
              </button>
            ) : (
              <button onClick={handleShowNav} className=" hidden max-md:block ">
                <RxHamburgerMenu size={25} />
              </button>
            )}
          </div>
        </div>

        <nav className={``}>
          <ul
            className={`flex-col items-center gap-6 text-gray-600 md:flex-row md:gap-8 ${showNav ? "flex" : "hidden"} md:flex max-md:gap-y-5 `}
          >
            <li className="cursor-pointer" onClick={handleHideNav}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                <IoHome size={20} />
              </NavLink>
            </li>

            <li onClick={handleHideNav} className="cursor-pointer relative">
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white px-1.5 rounded-full">
                {reduxCartItems.length}
              </span>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                <FaShoppingCart size={20} />
              </NavLink>
            </li>

            <li className="cursor-pointer" onClick={handleHideNav}>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "hover:text-blue-500"
                }
              >
                <FaHeart size={20} />
              </NavLink>
            </li>

            <li className="cursor-pointer">
              <IoPersonCircle size={26} className="hover:text-blue-500" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
