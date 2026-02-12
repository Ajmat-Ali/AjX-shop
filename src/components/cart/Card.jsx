import React from "react";

export const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex gap-4 p-4 border rounded-xl bg-white hover:shadow-sm transition"
    >
      {/* Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-medium line-clamp-2">{item.title}</h3>
          <p className="text-sm text-gray-500 mt-1">₹{item.price}</p>
        </div>

        {/* Actions (UI only for now) */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">
            Qty: <span className="font-medium">{item.quantity}</span>
          </span>

          <button className="text-sm text-red-500 hover:underline" disabled>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
