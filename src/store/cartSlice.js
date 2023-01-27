import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    cartItem: [],
    numberOfItems: 0,
    total: 0,
  },
  reducers: {
    toggleCartHandler(state) {
      state.showCart = !state.showCart;
    },
    addItemsToTheCart(state, action) {
      const newItem = action.payload;
      state.numberOfItems++;
      const existingItem = state.cartItem.find(
        (cartEle) => cartEle.id === newItem.id
      );
      if (existingItem) {
        console.log(typeof existingItem.quantity);
        existingItem.quantity++;
        existingItem.totalAmount = existingItem.price * existingItem.quantity;
      } else {
        state.cartItem.push({
          id: newItem.id,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalAmount: newItem.price,
          title: newItem.title,
        });
      }
      const total = state.cartItem.reduce((prevValue, currentVal) => {
        return prevValue + currentVal.totalAmount;
      }, 0);
      state.total = total;
    },
    deleteItemsFromTheCart(state, action) {
      state.numberOfItems--;
      const id = action.payload;
      const existingItem = state.cartItem.find((cartEle) => cartEle.id === id);
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity === 0) {
          state.cartItem = state.cartItem.filter(
            (cartElem) => cartElem.id !== existingItem.id
          );
        }
        existingItem.totalAmount = existingItem.price * existingItem.quantity;
      }
      state.total = state.total - existingItem.price;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
