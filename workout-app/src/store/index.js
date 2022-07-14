import { createStore } from "redux";

const counter_initial = { counter: 0 };
const increment_object = { type: "increment" };
const decrement_object = { type: "decrement" };

const counterReducer = (state = counter_initial, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};
const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch(increment_object);
store.dispatch(decrement_object);

export default store;
