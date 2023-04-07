import { legacy_createStore as createStore } from "redux";
import myReducer from "./reducer.js";

const reduxStore = createStore(myReducer);

export default reduxStore;
