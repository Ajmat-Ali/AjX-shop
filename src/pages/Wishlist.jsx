import { useEffect, useState, useContext } from "react";
import { WishlistShimmer } from "../components/wishlistComponent/WishlistShimmer";
import WishlistCard from "../components/wishlistComponent/WishlistCard";
import { WishlistContext } from "../context/wishlist/wishlist";
import { GoHeartFill } from "react-icons/go";

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const { wishlist, wishlistCount } = useContext(WishlistContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          {/* ❤️ Wishlist */}
          <GoHeartFill color="red" size={35} />
          <span className="text-gray-500 text-base ml-2">
            ({wishlistCount} items)
          </span>
        </h1>

        {wishlist.length > 0 && (
          <button
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
            onClick={() => console.log("Move all to cart")}
          >
            Move All to Cart
          </button>
        )}
      </div>

      {/* Content */}
      {wishlist.length <= 0 ? (
        <WishlistShimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
