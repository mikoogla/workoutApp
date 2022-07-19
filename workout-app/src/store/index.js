import { createStore } from "redux";

const counter_initial = { counter: 0 };

const counterReducer = (state = counter_initial, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.value,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - action.value,
    };
  }
  return {
    counter: 0,
  };
};
const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
