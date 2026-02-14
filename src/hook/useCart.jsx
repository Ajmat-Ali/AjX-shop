import React, { useEffect, useMemo, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || [],
  );

  useEffect(() => {
    if (cart.length >= 1) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  /////////////////////////////////////////// ------- addToCart ---------- //////////////////////////////////////////
  const addToCart = (products) => {
    setCart((prevCart) => {
      const existingCart = prevCart.find((item) => item.id === products.id);
      if (existingCart) {
        return prevCart.map((item) => {
          return item.id === products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        return [...prevCart, { ...products, quantity: 1 }];
      }
    });
  };
  /////////////////////////////////////////// ------- decreaseQty ---------- //////////////////////////////////////////
  const decreaseQty = (id) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            acc.push({
              ...item,
              quantity: item.quantity - 1,
            });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
    });
  };

  /////////////////////////////////////////// ------- removeFromCart ---------- //////////////////////////////////////////
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => {
        return item.id !== id;
      });
    });
  };
  /////////////////////////////////////////// ------- cartState ---------- //////////////////////////////////////////
  const cartState = useMemo(() => {
    const cartCount = cart.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);
    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return { cartCount, totalPrice };
  }, [cart]);

  return { cart, addToCart, decreaseQty, removeFromCart, cartState };
};
