import { useEffect, useMemo, useState } from "react";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import { Outlet } from "react-router";
import { CartContext } from "./context/createContext";

export default function App() {
  const [auth, setAuth] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    // console.log("1st UseEffect", savedCart);

    if (savedCart) {
      setCart(JSON.parse(savedCart));
      // console.log("Inside 1st useEffect Condition >>>>>>>", cart);
    }
  }, []);

  useEffect(() => {
    // console.log("2nd useEffect");
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log("2nd After set to local Storage", cart);
  }, [cart]);
  // console.log("App.jsx ------------", cart, Date.now());
  /////////////////////////////////////////// ------- addToCart ---------- //////////////////////////////////////////
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  ///////////////////////////////////// ------------- useMemo for calculating total quantity ------------------------------
  const cartCount = useMemo(() => {
    return cart.reduce((acc, curr) => {
      return (acc += curr.quantity);
    }, 0);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    cartCount,
  };

  return (
    <>
      <div className="bg-gray-50 w-11/12 m-auto mt-1 rounded-xl ">
        <CartContext.Provider value={value}>
          <Header />
          <Outlet />
        </CartContext.Provider>
      </div>
    </>
  );
}
