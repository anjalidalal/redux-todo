const Reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DEL_TODO":
      return {
        ...state,
        state: state.filter((el) => action.payload.id !== el.id),
      };
    default:
      return state;
  }
};

export default Reducer;
