import { nanoid } from "nanoid";

export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      status: false,
      title: text,
      id: nanoid(),
    },
  };
};
