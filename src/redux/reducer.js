import { combineReducers } from "redux";
// import { counterReducer } from "./counter/counterReducer";
// import { todoReducer } from "./todo/todoReducer";
import { counterReducer } from "./counter/counterSlice";
import { todoReducer } from "./todo/todoSlice";
import { newsReducer } from "./news/newsReducer";
import { productsReducer } from "./products/productsSlice";
import { productsApi } from "./products/productsAPI";
import { authReducer } from "./auth/authSlice";

export const reducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  news: newsReducer,
  products: productsReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  auth: authReducer
});
