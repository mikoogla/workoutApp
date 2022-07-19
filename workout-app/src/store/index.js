import { createSlice, configureStore } from "@reduxjs/toolkit";

const initial_state = { counter: 1001, isVisible: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initial_state,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
