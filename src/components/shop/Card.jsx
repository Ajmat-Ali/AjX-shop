import React, { useContext } from "react";
import { ProductsContext } from "../../context/createContext";

const Card = () => {
  const products = useContext(ProductsContext);
  console.log(products);

  return <div>Card</div>;
};

export default Card;
