import { combineReducers } from "redux";
// import { counterReducer } from "./counter/counterReducer";
// import { todoReducer } from "./todo/todoReducer";
import { counterReducer } from "./counter/counterSlice";
import { todoReducer } from "./todo/todoSlice";
import { newsReducer } from "./news/newsReducer";

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  news: newsReducer,
});
