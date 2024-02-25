import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from '../features/slices/sliderSlice';
import productsSlice from "../features/slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: sliderSlice,
    products: productsSlice
  },
});