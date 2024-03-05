import { createStore } from "redux";
import { reducer } from './reducer'

export const store = createStore(reducer);
// store.dispatch({ type: "increment", payload: 1 });
// console.log(store.getState());
