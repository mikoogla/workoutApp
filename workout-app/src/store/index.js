import { createStore } from "redux";

const initial_state = { counter: 1001, isVisible: true };

const counterReducer = (state = initial_state, action) => {
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
  if (action.type === "hideAndShow") {
    return {
      counter: state.counter,
      isVisible: !state.isVisible,
    };
  }
  return {
    ...initial_state,
  };
};
const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;
