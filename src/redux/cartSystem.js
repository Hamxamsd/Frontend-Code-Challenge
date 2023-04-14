import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  quantity: 0,
};

const cartSystem = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { AddCart } = cartSystem.actions;

export default cartSystem.reducer;