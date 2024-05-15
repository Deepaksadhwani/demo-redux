import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default appStore;
