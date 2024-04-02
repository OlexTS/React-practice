import { createSlice, nanoid } from "@reduxjs/toolkit";
import { todoInitialState } from "./initialState";

export const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    createTodo: {reducer(state, action) {
      state.todo.push(action.payload);},
      prepare(value){
        return {
            payload: {
              id: nanoid(),
              title: value,
              completed: false,
            },
          };
      }
    },
    deleteTodo: (state, action) => {
      const idx = state.todo.indexOf(action.payload.id);
      state.todo.splice(idx, 1);
    },
    checkCompleted: (state, action) => {
      for (const item of state.todo) {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      }
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const{createTodo, deleteTodo, checkCompleted}=todoSlice.actions;