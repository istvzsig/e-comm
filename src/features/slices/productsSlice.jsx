import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../../assets/data/storeData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: storeData,
    filteredProducts: JSON.parse(sessionStorage.getItem('products-data')) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(product => product.type === action.payload);
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem('products-data', saveState);
      } catch (err) {
        return err;
      }
    },
    resetFilter(state) {
      state.filteredProducts = state.allProducts; // Reset filtered products to all products
      sessionStorage.removeItem('products-data');
    },
  }
});

export const { filterProducts, resetFilter } = productsSlice.actions;
export default productsSlice.reducer;