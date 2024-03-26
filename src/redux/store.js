import { configureStore } from "@reduxjs/toolkit";
import { reducer as rootReducer } from './reducer'

export const store = configureStore({reducer: rootReducer});
// store.dispatch({ type: "increment", payload: 1 });
// console.log(store.getState());
