const redux = require("redux");

const counterReducer = (state = { counter: 0 }, acton) => {
  return {
    counter: state.counter + 5,
  };
};
const appStore = redux.createStore(counterReducer);

console.log(appStore.getState());
const counterSubscriber = () => {
  const latestState = appStore.getState();
  console.log(latestState);
};

appStore.subscribe(counterSubscriber);

appStore.dispatch({type: "increment"});