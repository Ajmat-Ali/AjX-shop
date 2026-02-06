import React from "react";

export const ErrorPage = ({ title, description }) => {
  console.log(title, description);

  return (
    <div className="text-center flex flex-col gap-7 text-red-600 h-screen">
      <h2 className="text-xl font-bold ">{title}</h2>
      <h2 className="text-xl font-bold">{description}</h2>
      {/* {error } */}
    </div>
  );
};
