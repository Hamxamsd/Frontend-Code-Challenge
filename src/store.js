import { configureStore } from '@reduxjs/toolkit';
import cartSystem from './redux/cartSystem';

// Create a Redux store with the cartSystem reducer
const store = configureStore({
  reducer: {
    cart: cartSystem
  }
});

export default store;