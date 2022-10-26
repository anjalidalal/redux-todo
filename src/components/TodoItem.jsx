import React from "react";
import logo from "./logo.png";
import Done from "./Done.png";
import Wrong from "./Wrong.png";

const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleEditTodo,
  handleToggleTodo,
}) => {
  return (
    <div className="todo">
      <p className={todo.status ? "strike" : ""}>{todo.title}</p>
      <div className="icons">
        <button onClick={() => handleDeleteTodo(todo.id)}>
          <img src={Wrong} className="logo" />
        </button>
        <button
          onClick={() => {
            console.log(todo.status);
            handleToggleTodo(todo.id);
          }}
        >
          <img src={Done} className="logo" />
        </button>
        <button onClick={() => handleEditTodo(todo.id)}>
          {" "}
          <img src={logo} className="logo" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
