import { createStore } from "redux";
import { reducer } from './reducer'
import { initialState } from "./initialState";




export const store = createStore(reducer, initialState);
// store.dispatch({ type: "increment", payload: 1 });
// console.log(store.getState());
