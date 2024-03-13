import { createSlice } from "@reduxjs/toolkit";
import {
  calcCartTotalPrice,
  setCartToSessionStore,
  getCartFromSessionStorage,
} from "./cart.js";

const SESSION_STORE = getCartFromSessionStorage("cart");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: SESSION_STORE,
    totalAmount: SESSION_STORE.length || 0,
    totalPrice: calcCartTotalPrice(SESSION_STORE) || 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      try {
        const existingItem = state.items.find(
          (item) =>
            item.id === item &&
            item.size === item.size &&
            item.color === item.color
        );
        if (existingItem) {
          existingItem.amount++;
          //   existingItem.totalPrice += item.price;
          state.totalAmount++;
          state.totalPrice += item.price;
        } else {
          state.items.push({
            size: item.size,
            color: item.color,
            ...item,
          });
          state.totalAmount++;
          state.totalPrice += item.price;
          setCartToSessionStore("cart", state.items);
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
