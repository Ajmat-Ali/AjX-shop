import React from "react";
import { useRouteError } from "react-router";

export const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen ">
      <h1 className="text-3xl font-bold text-red-500">{error.status}</h1>
      <h1 className="text-3xl font-bold text-red-500">{error.statusText}</h1>
      <h3 className="font-bold text-xl">{error.data}</h3>
    </div>
  );
};
