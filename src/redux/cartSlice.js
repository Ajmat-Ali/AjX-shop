import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    // items: ["Ajmat", "Redux", "Cart"],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
      // const x = { ...state, items: [...state.items, actions.payload] };
      // console.log(x);

      // return x;
      // // console.log(actions);
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
