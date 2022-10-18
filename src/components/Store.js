import { createStore } from "redux";
import Reducer from "./Reducer";

const store = createStore(Reducer);

console.log(store.getState());

export default store;

console.log(store.getState());
