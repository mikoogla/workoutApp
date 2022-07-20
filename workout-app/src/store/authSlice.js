import { createSlice } from "@reduxjs/toolkit";

const initial_auth_state = { isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initial_auth_state,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
