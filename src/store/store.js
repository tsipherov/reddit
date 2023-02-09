import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { createStore } from "redux";

// export const store = createStore(userReducer);
export const store = configureStore({
  reducer: { user: userReducer },
  enhancers: { devToolsEnhancer },
});
