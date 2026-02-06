import { useState } from "react";

const ShimmerUI = ({
  count = 6,
  gridClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  cardClass = "h-96",
  cardContent,
}) => {
  return (
    <div>
      <div className="flex-grow">
        <div className={`grid gap-6 ${gridClass}`}>
          {Array.from({ length: count }).map((_, ind) => {
            return (
              <ShimmerCard
                key={ind}
                cardClass={cardClass}
                cardContent={cardContent}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;

export const ShimmerCard = ({ cardClass, cardContent }) => {
  return (
    <div
      className={` rounded-xl bg-gray-300 inset-shadow-sm inset-shadow-gray-300 animate-pulse ${cardClass}`}
    >
      <h1 className="text-3xl font-bold">{cardContent}</h1>
    </div>
  );
};
