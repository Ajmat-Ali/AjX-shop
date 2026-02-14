import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    getData(URL);
  }, []);

  const getData = async (URL) => {
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("SERVER_ERROR");
      }
      const json = await res.json();
      setProducts(json);
      setLoader(false);
      setErr(false);
    } catch (err) {
      setLoader(false);
      setErr(true);
    }
  };

  return { loader, err, products };
};

export default useFetch;
