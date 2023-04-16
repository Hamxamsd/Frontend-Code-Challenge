import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the cart system
const initialState = {
  cart: [],
};

// Create a slice for the cart system with a name, initial state, and reducer functions
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart by pushing it to the state's cart array
    AddCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

// Export the reducer function and action creators from the slice
export const { AddCart } = cartSlice.actions;
export default cartSlice.reducer;
