import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../../assets/data/storeData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts: JSON.parse(sessionStorage.getItem('filtered-product-data')) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(product => product.type === action.payload);
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem('filtered-product-data', saveState);
      } catch (err) {
        return err;
      }
    }
  }
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;