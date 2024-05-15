import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";

const appStore = configureStore({
  reducer: { ui: uiReducer },
});

export default appStore;
