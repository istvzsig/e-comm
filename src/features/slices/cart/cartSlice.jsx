import { createSlice } from "@reduxjs/toolkit";
import {
  calcCartTotalPrice,
  setCartToSessionStore,
  getCartFromSessionStore,
} from "./cart.js";

const CART_ITEMS_SESSION_STORE = getCartFromSessionStore("cart");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: CART_ITEMS_SESSION_STORE,
    totalAmount: CART_ITEMS_SESSION_STORE.length || 0,
    totalPrice: calcCartTotalPrice(CART_ITEMS_SESSION_STORE) || 0,
  },
  reducers: {
    addItemToCart(state, action) {
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
          console.log(item.price);
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

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
