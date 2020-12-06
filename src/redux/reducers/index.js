import { combineReducers } from "redux";
import todo from "./todoReducer";
import posts from "./postsReducer";

// para crear store siempre se hace a través de reducers nunca de acciones
export default combineReducers({
  todo,
  posts,
});