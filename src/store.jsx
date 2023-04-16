import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './redux/cartSlice';

// Create a Redux store with the cartSystem reducer
const store = configureStore({
  reducer: {
    cart: cartSlice
  }
});

export default store;