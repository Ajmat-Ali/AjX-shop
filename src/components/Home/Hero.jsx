import { useContext } from "react";
import { CartContext } from "../../context/createContext";
import { Link } from "react-router";

const Hero = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="bg-linear-to-bl from-fuchsia-700 to-violet-700 text-gray-300 p-4 flex flex-col items-start justify-center gap-y-1 mt-5 rounded-md">
      <h1 className="text-3xl ">New Collection</h1>
      <p>Up to 30% off on trending electronics and fashion</p>
      <Link to={"/shop"}>
        <button className="bg-gray-200 text-gray-900 text-sm py-1 px-4 text-center cursor-pointer rounded-md mt-3">
          Shop Now
        </button>
      </Link>
    </div>
  );
};
export default Hero;
