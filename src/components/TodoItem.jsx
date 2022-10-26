import React from "react";
// import logo from "./logo.png";
// import Done from "./Done.png";
// import Wrong from "./Wrong.png";

const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleEditTodo,
  handleToggleTodo,
}) => {
  return (
    <div className="todo">
      <p className={todo.status ? "strike" : ""}>{todo.title}</p>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
      <button
        onClick={() => {
          console.log(todo.status);
          handleToggleTodo(todo.id);
        }}
      >
        Done
      </button>
      <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
    </div>
  );
};

export default TodoItem;
