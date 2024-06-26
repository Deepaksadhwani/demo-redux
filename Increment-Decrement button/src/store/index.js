import { createStore } from "redux";
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incrementBy2") {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === "decrementBy2") {
    return {
      counter: state.counter - 2,
    };
  }
  return state;
};

const store = createStore(counterReducer);



export default store;