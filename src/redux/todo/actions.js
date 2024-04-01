// import { CREATETODO } from "./types";

import { createAction, nanoid } from "@reduxjs/toolkit";

export const createTodo = createAction("CREATETODO", (value) => {
  return {
    payload: {
      id: nanoid(),
      title: value,
      completed: false,
    },
  };
});

export const deleteTodo = createAction('DELETETODO');
export const checkCompleted = createAction('CHECKCOMPLETED');
// export const createTodo = todo => ({type: CREATETODO, payload: todo})
