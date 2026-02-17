import { GoHeartFill } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { useContext } from "react";
import { WishlistContext } from "../../context/wishlist/wishlist";
import { CartContext } from "../../context/cart/cartContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const WishlistCard = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition relative">
      {/* Remove Icon */}
      <button
        className="absolute top-3 right-3  p-2 rounded-full border transition bg-red-100 border-red-300 text-red-600"
        onClick={() => {
          addToWishlist(product);
          toast.success("Item removed from wishlist", {
            toastId: "remove-cart",
            style: {
              backgroundColor: "#333",
              color: "white",
            },
          });
        }}
      >
        <AiFillHeart size={20} />
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />

      {/* Product Info */}
      <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>

      <p className="text-sm text-gray-500">{product.category}</p>

      <p className="font-bold text-lg mt-2">₹ {product.price}</p>

      {/* Actions */}
      <div className="mt-4 space-y-2">
        <button
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          onClick={() => {
            addToCart(product);
            toast.success("Item moved to cart", {
              toastId: "remove-cart",
              style: {
                backgroundColor: "#333",
                color: "white",
              },
            });
          }}
        >
          Move to Cart
        </button>

        <Link to={`/shop/${product.id}`}>
          <button className="w-full py-2 border rounded-lg hover:bg-gray-100 transition">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WishlistCard;
