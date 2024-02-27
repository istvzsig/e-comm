import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/storeData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    product: JSON.parse(sessionStorage.getItem("product")) || {},
    allProducts: storeData,
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filtered-products")) || storeData,
  },
  reducers: {
    getProductById(state, action) {
      try {
        const productById = storeData.filter(
          (product) => product.id === action.payload
        );
        state.product = productById;
        const saveState = JSON.stringify(productById);
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
        sessionStorage.setItem("filtered-products", saveState);
      } catch (err) {
        return err;
      }
    },
    resetFilter(state) {
      state.filteredProducts = state.allProducts;
      sessionStorage.removeItem("filtered-products");
    },
  },
});

export const { getProductById, filterProducts, resetFilter } =
  productsSlice.actions;
export default productsSlice.reducer;
