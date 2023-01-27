import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: { login: loginSlice.reducer, cart: cartSlice.reducer },
});
export default store;
