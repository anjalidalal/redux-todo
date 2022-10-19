import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./Action";
import { nanoid } from "nanoid";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todoReducer = useSelector((store) => store);
  console.log(todoReducer);

  return (
    <div className="main">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          const data = {
            title: text,
            id: nanoid(),
            status: false,
          };
          dispatch(addTodo(data));
        }}
      >
        Add
      </button>
      {todoReducer.map((todo) => (
        <div className="list" key={todo.id}>
          <label key={todo.id}>
            <input type="checkbox" />
            {todo.title}
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              Delete
            </button>
            <button>Edit</button>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Todo;
