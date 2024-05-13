const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "IncrementBy1") {
    return {
      counter: state.counter + 2,
    };
  }
  if (action.type === "decrementBy2") {
    return { counter: state.counter - 2 };
  }
  return state;
};
const appStore = redux.createStore(counterReducer);

console.log(appStore.getState());
const counterSubscriber = () => {
  const latestState = appStore.getState();
  console.log(latestState);
};

appStore.subscribe(counterSubscriber);

appStore.dispatch({ type: "IncrementBy1" });
appStore.dispatch({ type: "decrementBy2" });
