import { createReducer } from "@reduxjs/toolkit";
import { counterInitialState } from "./initialState";
// import { DECREMENT, INCREMENT, SETSTEP } from "./types";
import { decrement, increment, setStep } from "./actions";

export const counterReducer = createReducer(counterInitialState, builder=>{builder.addCase(increment,(state, action)=>({
  ...state,
  total: state.total + action.payload,
})).addCase(decrement,(state, action)=>({
    ...state,
    total: state.total - action.payload,
  })).addCase(setStep,(state, action)=>({ ...state, step: action.payload }))})
  
// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { ...state, total: state.total + action.payload };
//     case DECREMENT:
//       return { ...state, total: state.total - action.payload };
//     case SETSTEP:
//       return { ...state, step: action.payload };
//     default:
//       return state;
//   }
// };
