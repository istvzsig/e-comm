import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/storeData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: JSON.parse(sessionStorage.getItem("product")) || storeData,
    allProducts: storeData,
    filteredProducts:
      JSON.parse(sessionStorage.getItem("products-data")) || storeData,
  },
  reducers: {
    getProduct(state, action) {
      try {
        const products = storeData.filter(
          (product) => product.id === action.payload
        );
        state.product = products[0];
        const saveState = JSON.stringify(products[0]);
        sessionStorage.setItem("product", saveState);
      } catch (err) {
        return err;
      }
    },
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("products-data", saveState);
      } catch (err) {
        return err;
      }
    },
    resetFilter(state) {
      state.filteredProducts = state.allProducts;
      sessionStorage.removeItem("products-data");
    },
  },
});

export const { getProduct, filterProducts, resetFilter } =
  productsSlice.actions;
export default productsSlice.reducer;
