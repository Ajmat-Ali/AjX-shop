import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});

export default appStore;
