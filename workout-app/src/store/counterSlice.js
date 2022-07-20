import { createSlice } from "@reduxjs/toolkit";

const initial_counter_state = { counter: 1001, isVisible: true };

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

export default counterSlice;
