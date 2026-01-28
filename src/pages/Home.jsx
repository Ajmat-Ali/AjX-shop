import Hero from "../components/Home/Hero";
{
}
import { useState, useEffect } from "react";
import useDebounce from "../components/useDebounce";

export const Home = () => {
  const [search, setSearch] = useState("");

  const x = useDebounce(search, 1000);
  console.log("Retured Debounce Value", x);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="px-3">
      <Hero />
      {/* <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={search}
        className="p-2 border border-2"
      /> */}
    </div>
  );
};
export default Home;
