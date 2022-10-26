import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  data,
  handleDeleteTodo,
  handleEditTodo,
  handleToggleTodo,
}) => {
  return (
    <>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </>
  );
};

export default TodoList;

// {todoReducer.map((todo) => (
//     <div className="todo" key={todo.id}>
//       {getTaskContent(todo)}
//       <div>
//         <button
//           className="delete"
//           onClick={() => {
//             dispatch(deleteTodo(todo.id));
//           }}
//         >
//           <img src={Wrong} className="icon" />
//         </button>
//         <button className="done">
//           <img src={Done} className="icon" />
//         </button>
//       </div>
//     </div>
//   ))}
