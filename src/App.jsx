// import { Home } from "./pages/Home";
// import Shop from "./pages/Shop";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { CartContext } from "./context/createContext";

export default function App() {
  const [auth, setAuth] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
  /////////////////////////////////////////// ------- decreaseQty ---------- //////////////////////////////////////////
  const decreaseQty = (id) => {
    setCart((prevCart) => {
      return prevCart
        .filter((item) => {
          if (item.id === id) {
            if (item.quantity <= 1) {
              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        })
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        );
    });
  };
  /////////////////////////////////////////// ------- removeFromCart ---------- //////////////////////////////////////////
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== id);
    });
  };

  ///////////////////////////////////// ------------- useMemo for calculating totalQuantity (cartCount) and totalPrice ------------------------------
  const cartState = useMemo(() => {
    const cartCount = cart.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return { cartCount, totalPrice };
  }, [cart]);

  /////////////////////////////////// ------------Context API Value-------------- ///////////////////////////////////
  const value = {
    cart,
    addToCart,
    decreaseQty,
    removeFromCart,
    cartState,
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
