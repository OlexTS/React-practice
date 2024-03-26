import { createReducer } from "@reduxjs/toolkit";
import { todoInitialState } from "./initialState";
import { createTodo } from "./actions";
// import { CREATETODO } from "./types";

export const todoReducer = createReducer(todoInitialState.todo, {
  [createTodo]: (state, action) => {
    state.todo.push(action.payload);
  },
});
// export const todoReducer = (state = todoInitialState, action) => {
//   switch (action.type) {
//     case CREATETODO:
//       return { ...state, todo: [...state.todo, { ...action.payload }] };

//     default:
//       return state;
//   }
// };
