import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./Action";
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
      <ul>
        {todoReducer.map((todo) => (
          <li key={todo.id}>
            <Task todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function Task({ todo }) {
  const [editing, setEditing] = useState(false);

  let taskContent;

  if (editing) {
    taskContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            dispatch(
              editTodo({
                ...todo,
                title: e.target.value,
              })
            );
          }}
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {todo.title}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      {taskContent}
      <button
        onClick={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        Delete
      </button>
    </>
  );
}

export default Todo;

{
  /* <label key={todo.id}>
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
</label>; */
}
