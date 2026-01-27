const Pagination = () => {
  return (
    <div>
      {/* <!-- Pagination --> */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center gap-1">
          <a
            href="#"
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            &laquo;
          </a>
          <a href="#" className="px-3 py-1 rounded-lg bg-indigo-600 text-white">
            1
          </a>
          <a
            href="#"
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            2
          </a>
          <a
            href="#"
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            3
          </a>
          <span className="px-3 py-1 text-gray-600">...</span>
          <a
            href="#"
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            8
          </a>
          <a
            href="#"
            className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            &raquo;
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
