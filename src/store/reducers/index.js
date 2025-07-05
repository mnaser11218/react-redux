import firstReducer from "./reducer1";
import { combineReducers } from "redux";
import { createStore} from "redux";
import { userReducer } from "./user_reducer";
import  todoReducer  from "./todo.ts";
const rootReducer = combineReducers({
  root: firstReducer,
  user: userReducer,
  todo: todoReducer
});

export default rootReducer;