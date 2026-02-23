import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Ajmat", "Redux", "Cart"],
  },
  reducers: {
    addItem: (state, actions) => {
      console.log(actions);
    },
    removeItem: (state, actions) => {
      console.log(actions);
    },
    clearItem: (state, actions) => {
      console.log(actions);
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
