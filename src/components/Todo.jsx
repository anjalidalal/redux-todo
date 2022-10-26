import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "./Action";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  // const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);
  console.log(todos);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    const action = addTodo(text);
    dispatch(action);
    setText("");
  };

  const handleDeleteTodo = (id) => {
    const action = deleteTodo(id);
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };

  const handleEditTodo = (data) => {
    const action = editTodo(data);
    dispatch(action);
  };

  return (
    <>
      <h1>Todo List App</h1>
      <h3>By Anjali Dalal</h3>
      <div className="header">
        <input
          className="input"
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <TodoList
        data={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        handleToggleTodo={handleToggleTodo}
      />
    </>
  );
};

export default Todo;
