import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if(!state[action.payload.id]) {
        state[action.payload.id] = {quantity: 1, ...action.payload};
      } else {
        state[action.payload.id].quantity = state[action.payload.id].quantity + 1;
      }
      return state;
    },
    removeFromCart: (state, action) => {
      delete state[action.payload.id];
      return state;
    },
    increaseQuantity: (state, action) => {
      state[action.payload.id].quantity = state[action.payload.id].quantity + 1;
      return state;
    },
    decreaseQuantity: (state, action) => {
      state[action.payload.id].quantity = state[action.payload.id].quantity - 1;

      if(state[action.payload.id].quantity < 1) {
        delete state[action.payload.id];
      }
      return state;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
