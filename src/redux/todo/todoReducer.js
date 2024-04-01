import { createReducer } from "@reduxjs/toolkit";
import { todoInitialState } from "./initialState";
import { createTodo, deleteTodo, checkCompleted } from "./actions";
// import { CREATETODO } from "./types";

export const todoReducer = createReducer(todoInitialState, (builder) => {
  builder
    .addCase(createTodo, (state, action) => {
      state.todo.push(action.payload);
    })
    .addCase(deleteTodo, (state, action) => {
      const idx = state.todo.indexOf(action.payload.id);
      state.todo.splice(idx, 1);
    })
    .addCase(checkCompleted, (state, action) => {
      for (const item of state.todo) {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      }
    });
});
// export const todoReducer = (state = todoInitialState, action) => {
//   switch (action.type) {
//     case CREATETODO:
//       return { ...state, todo: [...state.todo, { ...action.payload }] };

//     default:
//       return state;
//   }
// };
