import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(sessionStorage.getItem("cart")) || [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      try {
        const existingItem = state.cart.find(
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
          state.cart.push({
            size: item.size,
            color: item.color,
            ...item,
          });
          state.totalAmount++;
          state.totalPrice += item.price;
          sessionStorage.setItem("cart", JSON.stringify(state));
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
