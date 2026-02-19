export default function hoc(ProductCard) {
  return (product) => {
    return (
      <div>
        <span className="relative z-1 bg-black text-indigo-200 px-4 py-1 rounded-xl">
          Good rating
        </span>
        <ProductCard {...product} />
      </div>
    );
  };
}
