import { nanoid } from "nanoid";
import { ADD_TODO, DEL_TODO, TOGGLE_TODO, EDIT_TODO } from "./ActionTypes";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: { title: title, id: nanoid(), status: false },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DEL_TODO,
    payload: { id: id },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id: id },
  };
};

export const editTodo = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
  };
};
