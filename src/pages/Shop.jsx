import SideBar from "../components/shop/SideBar";
import ShopContent from "../components/shop/ShopContent";
import { useEffect, useMemo, useState } from "react";
import { PRODUCTS_URL } from "../utils/constant";
import { ProductsContext } from "../context/createContext";
import { useDebounce } from "../hook/useDebounce";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [err, setErr] = useState(false);

  const [query, setQuery] = useState({
    sortBy: "new",
    category: "all",
    search: "",
    minRating: {
      rating_5: false,
      rating_4: false,
      rating_3: false,
    },
    priceRange: {
      min: 0,
      max: 1000,
    },
  });

  const [draftFilter, setDraftFilter] = useState({
    minRating: {
      rating_5: false,
      rating_4: false,
      rating_3: false,
    },
    priceRange: {
      min: 0,
      max: 1000,
    },
  });

  const debounceSearch = useDebounce(query.search, 1000);

  const getProducts = async (PRODUCTS_URL) => {
    setLoader(true);
    try {
      const res = await fetch(PRODUCTS_URL);
      if (!res.ok) {
        throw new Error("SERVER_ERROR");
      }
      const data = await res.json();
      setProducts(data);
      setLoader(false);
      setErr(false);
    } catch (error) {
      setErr(true);
      setLoader(false);
    }
  };

  useEffect(() => {
    getProducts(PRODUCTS_URL);
  }, []);

  // /////////----------------/////////////----------- Sort & Filter Products Using useMemo ---------------/////////--------------////////
  const sortedProducts = useMemo(() => {
    let result = products;
    const search = debounceSearch.trim().toLowerCase();
    const category = query.category;
    // ---------------------- Search ---------------

    if (search) {
      result = result.filter((product) => {
        return product.title.toLowerCase().includes(search);
      });
    }

    // ---------------------- Category ---------------

    if (category && category !== "all") {
      result = result.filter((product) => {
        return product.category === category;
      });
    }

    // ---------------------- Rating ---------------

    let min = 0;
    const {
      minRating: { rating_5, rating_4, rating_3 },
    } = query;
    if (rating_5) min = 5;
    if (rating_4) min = 4;
    if (rating_3) min = 3;

    if (rating_5 || rating_4 || rating_3) {
      result = result.filter((product) => product.rating.rate >= min);
    }

    // ---------------------- Sort ---------------

    switch (query.sortBy) {
      case "asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    return result;
  }, [
    products,
    query.sortBy,
    query.category,
    query.minRating,
    query.priceRange,
    debounceSearch,
  ]);

  // ---------------------------------------------//////-- Hanlde Apply Filter (Tomorrow Will be start. 11-02-2026) --///////////----------------------------
  const handleAppllyFilter = (e) => {
    setQuery((pre) => {
      return {
        ...pre,
        minRating: { ...pre.minRating, ...draftFilter.minRating },
        priceRange: { ...pre.priceRange, ...draftFilter.priceRange },
      };
    });
  };

  // -------------------------- Context API Value ------------------------------
  const value = {
    products: sortedProducts,
    query,
    setQuery,
    draftFilter,
    setDraftFilter,
    err,
    loader,
    handleAppllyFilter,
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <ProductsContext.Provider value={value}>
        <SideBar />
        <ShopContent />
      </ProductsContext.Provider>
    </div>
  );
};
export default Shop;
