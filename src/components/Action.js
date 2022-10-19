export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DEL_TODO",
    payload: { id: id },
  };
};

export const editTodo = (text) => {
  return {
    type: "EDIT_TODO",
    payload: { title: text },
  };
};
