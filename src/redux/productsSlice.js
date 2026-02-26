import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loader: true,
    err: false,
  },
  reducers: {
    loadProducts: (state, { payload }) => {
      const { products, err, loader } = payload;
      state.products = products;
      state.loader = loader;
      state.err = err;
    },
  },
});

export const { loadProducts } = productsSlice.actions;

export default productsSlice.reducer;
