import sliderReducer from '../features/slices/sliderSlice';
import productsReducer from "../features/slices/productsSlice";
import cartReducer from "../features/slices/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});