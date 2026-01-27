const ShimmerUI = () => {
  return (
    <div>
      <div className="flex-grow">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="products-grid"
        >
          {/* <!-- Products will be loaded via JS --> */}
          <div className="skeleton-loader h-96 rounded-xl inset-shadow-sm inset-shadow-gray-300 bg-gray-200"></div>
          <div className="skeleton-loader h-96 rounded-xl inset-shadow-sm inset-shadow-gray-300 bg-gray-200"></div>
          <div className="skeleton-loader h-96 rounded-xl inset-shadow-sm inset-shadow-gray-300 bg-gray-200"></div>
          <div className="skeleton-loader h-96 rounded-xl inset-shadow-sm inset-shadow-gray-300 bg-gray-200"></div>
          <div className="skeleton-loader h-96 rounded-xl inset-shadow-sm inset-shadow-gray-300 bg-gray-200"></div>
          <div className="skeleton-loader h-96 rounded-xl inset-shadow-sm inset-shadow-gray-300 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
