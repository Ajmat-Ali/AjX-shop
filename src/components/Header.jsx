import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";

export default function Header({ auth, setAuth }) {
  const handleLogin = () => {
    setAuth(!auth);
  };
  return (
    <>
      <header className="flex justify-between p-4 bg-white shadow-xl rounded-md mb-10">
        <div className="border-2">
          <h1 className="text-3xl font-bold">
            <span className="text-blue-400">AjX</span> Shop
          </h1>
        </div>
        <nav className="border border-4 border-red-900">
          <ul className="flex items-center text-gray-600 gap-x-6 text-md p-2">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">
              <FaShoppingCart size={20} />
            </li>
            <li className="cursor-pointer">
              <FaHeart size={20} />
            </li>
            <li className="cursor-pointer" onClick={handleLogin}>
              <IoPersonCircle size={25} />
            </li>
            {/* <li>Profile</li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
