import { createStore } from "redux";
import rootReducer from "../reducers/index";

export const myStore = () => {
  const store = createStore(rootReducer);
  return store;
};
