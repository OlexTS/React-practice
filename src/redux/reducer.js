import { combineReducers } from "redux";
// import { counterReducer } from "./counter/counterReducer";
import { todoReducer } from "./todo/todoReducer";
import { counterReducer } from "./counter/counterSlice";

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
