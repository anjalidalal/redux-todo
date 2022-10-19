const Reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DEL_TODO":
      return state.filter((el) => action.payload.id !== el.id);
    case "EDIT_TODO":
      return state;
    default:
      return state;
  }
};

export default Reducer;
