import { combineReducers } from "redux";
import computerReducer from "./computerReducer";
import laptopReducer from "./laptopReducer";
import phoneReducer from "./phoneReducer";
import watchReducer from "./watchReducer";

const rootReducer = combineReducers({
  laptop: laptopReducer,
  phone: phoneReducer,
  watch: watchReducer,
  computer: computerReducer,
});

export default rootReducer;
