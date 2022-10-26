import { ADD_TODO, DEL_TODO, TOGGLE_TODO, EDIT_TODO } from "./ActionTypes";

const initialState = {
  todos: [],
};

const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => payload.id !== el.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              status: !todo.status,
            };
          }
          return todo;
        }),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return {
              ...todo,
              title: payload.title,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default Reducer;
