import { combineReducers } from "redux";
import laptopReducer from "./laptopReducer";
import phoneReducer from "./phoneReducer";
import watchReducer from "./watchReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
  watch: watchReducer,
});

export default rootReducer;
