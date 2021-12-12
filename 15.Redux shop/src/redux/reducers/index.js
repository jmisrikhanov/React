import { combineReducers } from "redux";
import laptopReducer from "./laptopReducer";
import phoneReducer from "./phoneReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
});

export default rootReducer;
