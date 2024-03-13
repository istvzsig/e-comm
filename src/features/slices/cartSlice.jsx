import { createSlice } from "@reduxjs/toolkit";

function calcCartTotalPrice(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

function setCartToSessionStore(key, items) {
  sessionStorage.setItem(key, JSON.stringify(items));
}

function getCartFromSession(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCartFromSession("cart") || [],
    totalAmount: getCartFromSession("cart").length || 0,
    totalPrice: calcCartTotalPrice(getCartFromSession("cart")) || 0,
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
