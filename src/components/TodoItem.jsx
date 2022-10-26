import React, { useState } from "react";
import logo from "./logo.png";
import Done from "./Done.png";
import Wrong from "./Wrong.png";
import { nanoid } from "nanoid";

const TodoItem = ({
  todo,
  handleDeleteTodo,
  handleEditTodo,
  handleToggleTodo,
}) => {
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(false);

  let taskContent;

  if (editing) {
    taskContent = (
      <>
        <input
          type="text"
          id="task"
          className="task"
          value={todo.title}
          onChange={(e) => {
            const data = {
              ...todo,
              title: e.target.value,
            };
            handleEditTodo(data);
          }}
        />
        <button
          className="save"
          onClick={() => {
            setEditing(false);
          }}
          onMouseOver={() => focus()}
        >
          {" "}
          <img src={logo} className="logo" />
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p className={todo.status ? "strike" : ""}>{todo.title}</p>
        <button onClick={() => setEditing(true)}>
          <img src={logo} className="logo" />
        </button>
      </>
    );
  }

  return (
    <div className="todo">
      {/* <p className={todo.status ? "strike" : ""}>{todo.title}</p> */}
      {taskContent}
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
        {/* <button onClick={() => handleEditTodo(todo.id)}>
          {" "}
          <img src={logo} className="logo" />
        </button> */}
      </div>
    </div>
  );
};

export default TodoItem;
