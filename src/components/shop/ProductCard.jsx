import React, { useContext } from "react";
import { ProductsContext } from "../../context/createContext";

const ProductCard = ({
  product: { category, description, image, price, rating, title, id },
}) => {
  return (
    <div
      onClick={() => {}}
      className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-indigo-600">₹{price}</span>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-lg">
            ⭐ {rating.rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
