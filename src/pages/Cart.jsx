import { useContext } from "react";
import { CartContext } from "../context/cart/cartContext";
import { Link } from "react-router";
import { ShimmerCart } from "../components/cartComponent/ShimmerCart";
import { Card } from "../components/cartComponent/Card";

const Cart = () => {
  const {
    cart,
    cartState: { cartCount, totalPrice },
    addToCart,
    removeFromCart,
    decreaseQty,
  } = useContext(CartContext);

  if (cart.length <= 0) {
    return <ShimmerCart />;
  }

  return (
    <div className="px-4 md:px-10 py-8">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/*------------------- LEFT: Cart Items ---------------------------*/}
        <div className="lg:col-span-2 space-y-6 flex flex-col-reverse ">
          {cart.map((item) => (
            <Card
              key={item.id}
              item={item}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        {/*--------------------------- RIGHT: Summary ---------------------------*/}
        <div className="border rounded-2xl p-6 bg-white h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="flex justify-between text-sm mb-3">
            <span>Total Items</span>
            <span>{cartCount}</span>
          </div>

          <div className="flex justify-between text-sm mb-3">
            <span>Subtotal</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm mb-6">
            <span>Delivery</span>
            <span className="text-green-600">FREE</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-lg mb-6">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
