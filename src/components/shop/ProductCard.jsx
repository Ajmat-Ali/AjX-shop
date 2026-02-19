import React from "react";

const ProductCard = ({ product }) => {
  const { category, description, image, price, rating, title, id } = product;

  return (
    <div
      className="group cursor-pointer bg-white rounded-2xl shadow-sm 
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                 overflow-hidden border border-transparent hover:border-indigo-100"
    >
      {/* Image */}
      <div className="h-52 w-full overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain 
                     group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Category */}
        <span
          className="inline-block text-xs font-medium text-indigo-600 
                         bg-indigo-50 px-3 py-1 rounded-full"
        >
          {category} {id}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-semibold text-gray-800 line-clamp-1
                     group-hover:text-indigo-600 transition-colors"
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>

        {/* Price & Rating */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>

          <span
            className="flex items-center gap-1 text-sm font-medium 
                       bg-green-100 text-green-700 px-2 py-1 rounded-lg"
          >
            ⭐ {rating?.rate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
