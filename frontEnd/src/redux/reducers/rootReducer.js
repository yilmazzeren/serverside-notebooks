import { combineReducers } from "redux";
import notebooksReducer from "./notebooksReducer";

const rootReducer = combineReducers({
  notebooksReducer,
});

export default rootReducer;
