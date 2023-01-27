import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    loginHandler(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logoutHandler(state) {
      state.isLoggedIn = false;
    },
    toggleLoginHandler(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const loginActions = loginSlice.actions;

export default loginSlice;
