import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./Action";
import { nanoid } from "nanoid";

const Todo = () => {
  const [text, setText] = useState("");
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const todoReducer = useSelector((store) => store);
  console.log(todoReducer);
  let taskContent;

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
          <p key={todo.id}>
            {editing
              ? (taskContent = (
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
                ))
              : (taskContent = (
                  <>
                    {todo.title}
                    <button onClick={() => setEditing(true)}>Edit</button>
                  </>
                ))}
            <button
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
