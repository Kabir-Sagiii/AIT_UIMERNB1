console.log("Javascript started");
import reduxStore from "./Store.js";
console.log("Initial State", reduxStore.getState());
reduxStore.dispatch({
  type: "inc",
  payload: 1,
});
console.log("After Update", reduxStore.getState());
reduxStore.dispatch({
  type: "inc",
  payload: 1,
});
console.log("After Update", reduxStore.getState());
reduxStore.dispatch({
  type: "todo",
  payload: "Sagar",
});
console.log("After Update", reduxStore.getState());
reduxStore.dispatch({
  type: "todo",
  payload: "Raj",
});
console.log("After Update", reduxStore.getState());
reduxStore.dispatch({
  type: "dec",
  payload: 1,
});
console.log("After Update", reduxStore.getState());
