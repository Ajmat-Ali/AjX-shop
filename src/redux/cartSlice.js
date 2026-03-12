import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state, actions) => {
      // console.log(actions);
    },
    clearItem: (state, actions) => {
      // console.log(actions);
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
