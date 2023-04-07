const myReducer = (state = { count: 0, todo: [] }, action) => {
  if (action.type === "inc") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  } else if (action.type === "todo") {
    return {
      ...state,
      todo: [...state.todo, action.payload],
    };
  } else if (action.type === "dec") {
    return {
      ...state,
      count: state.count - action.payload,
    };
  }
  return state;
};
export default myReducer;
