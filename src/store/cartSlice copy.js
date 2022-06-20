import { createSlice } from "@reduxjs/toolkit";
import products from "../api/products";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: products,
    currentCart: [],
    totalItems: 0,
    totalPrice: 0,
  },
  //totalPrice: 0,
  reducers: {
    addToCart: (state, action) => {
      state.currentCart.push(action.payload);
      state.totalItems += 1;
    },
    removeFromCart: (state, action) => {
      let newCart = state.currentCart.filter(
        (item) => item.id != action.payload
      );
      state.currentCart = newCart;
      state.totalItems -= 1;
    },
    addQuantity: (state, action) => {
      let item = state.currentCart.find((item) => (item.id = action.payload));
      let newCart = state.currentCart.filter(
        (item) => item.id != action.payload
      );

      item.quantity += 1;
      newCart.push(item);
      state.currentCart = newCart;
    },
    increaseCartQuantity: (state, action) => {
      let newState = state.currentCart.map((item) => {
        if (item.id == action.payload) {
          item.quantity += 1;
        }
        return item;
      });
      state.currentCart = newState;
      state.totalItems += 1;
    },
    decreaseCartQuantity: (state, action) => {
      let newCart = state.currentCart.map((item) => {
        if (item.id == action.payload) {
          item.quantity -= 1;
        }
        return item;
      });
      state.currentCart = newCart.filter((item) => item.quantity !== 0);
      state.totalItems -= 1;
    },
    addToTotal: (state, action) => {
      state.totalPrice += action.payload;
    },
    subtractFromTotal: (state, action) => {
      state.totalPrice -= action.payload;
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addQuantity,
  increaseCartQuantity,
  decreaseCartQuantity,
  addToTotal,
  subtractFromTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
