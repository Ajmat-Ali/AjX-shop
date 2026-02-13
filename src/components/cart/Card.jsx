import React from "react";

export const Card = ({ item, addToCart, decreaseQty, removeFromCart }) => {
  const { id, image, price, category, description, quantity, rating, title } =
    item;
  return (
    <div className="flex gap-6 p-5 border rounded-2xl bg-white hover:shadow-md transition">
      {/* Product Image */}
      <div className="w-28 h-28 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
          <p className="text-gray-500 mt-1">₹{price}</p>
        </div>

        {/* Quantity + Actions */}
        <div className="flex items-center justify-between mt-4 ">
          {/* Quantity Controls */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => decreaseQty(id)}
              className="px-3 py-1 text-lg hover:bg-gray-100"
            >
              −
            </button>
            <span className="px-4 py-1 font-medium">{quantity}</span>
            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 text-lg hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Subtotal + Remove */}
          <div className="text-right">
            <p className="font-medium">₹{(price * quantity).toFixed(2)}</p>
            <button
              onClick={() => removeFromCart(id)}
              className="text-sm text-red-500 hover:underline mt-1"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
