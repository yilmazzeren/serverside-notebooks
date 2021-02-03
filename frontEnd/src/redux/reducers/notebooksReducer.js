import * as actionTypes from "../actions/actionTypes";

export default function notebooksReducer(state = { files: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_NOTEBOOKS:
      return { ...state, files: action.payload };
    default:
      return state;
  }
}
