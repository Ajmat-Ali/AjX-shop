import Hero from "../components/Home/Hero";

import { useState, useEffect } from "react";
import useDebounce from "../components/useDebounce";
import { Faqs } from "../components/Home/Faqs";

export const Home = () => {
  return (
    <div className="px-3">
      <Hero />
      <Faqs />
    </div>
  );
};
export default Home;
