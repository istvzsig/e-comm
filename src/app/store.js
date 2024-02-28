import sliderReducer from '../features/slices/sliderSlice';
import productsReducer from "../features/slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer
  },
});