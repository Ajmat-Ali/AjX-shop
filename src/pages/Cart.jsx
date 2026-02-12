import { useContext } from "react";
import { CartContext } from "../context/createContext";
import { Link } from "react-router";
import { ShimmerCart } from "../components/cart/ShimmerCart";
import { Card } from "../components/cart/Card";

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Empty cart UI

  if (cart.length === 0) {
    return <ShimmerCart />;
  }

  return (
    <div className="px-4 py-6 md:px-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Summary */}
        <div className="border rounded-xl p-5 bg-white h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Total Items</span>
            <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Total Price</span>
            <span className="font-medium">
              ₹
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>

          <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
