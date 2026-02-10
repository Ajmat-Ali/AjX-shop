import React from "react";
import { IoStar } from "react-icons/io5";

export const FillStart = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, ind) => {
        return (
          <span key={ind} className="w-4 h-4 fill-current">
            <IoStar />
          </span>
        );
      })}
    </>
  );
};
