import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
    increaseQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id == action.payload) {
          item.quantity += 1;
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      return state.map((item) => {
        if (item.id == action.payload) {
          item.quantity -= 1;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
