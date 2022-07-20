import { createSlice, configureStore } from "@reduxjs/toolkit";

const initial_counter_state = { counter: 1001, isVisible: true };
const initial_auth_state = { isLoggedIn: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initial_counter_state,
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload.value;
    },
    decrement: (state, action) => {
      state.counter -= action.payload.value;
    },
    hideAndShow: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
