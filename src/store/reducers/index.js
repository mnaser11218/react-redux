import firstReducer from "./reducer1";
import { combineReducers } from "redux";
import { createStore} from "redux";
import { userReducer } from "./user_reducer";

const rootReducer = combineReducers({
  root: firstReducer,
  user: userReducer
});

export default rootReducer;