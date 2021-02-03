import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getNotebooksSuccess(categories) {
  return {
    type: actionTypes.GET_NOTEBOOKS,
    payload: categories,
  };
}

export function getNotebooks() {
  return async function (dispatch) {
    let url = "http://localhost:5000/api/notebooks/";

    const result = await axios.get(url).catch((err) => console.log(err));
    // result.data = notebooks içindeki text dosya isimleri ve içerikleri
    const { data, status } = result;
    //const data=result.data
    //const status=result.status
    if (status === 200) {
      dispatch(getNotebooksSuccess(data));
    } else {
      return;
    }
  };
}

export function newPost(payload) {
  return async function (dispatch) {
    let url = "http://localhost:5000/api/notebooks/save";
    const result = await axios
      .post(url, payload)
      .catch((err) => console.log(err));
    const { status } = result;
    //   const status=result.status
    if (status === 200) {
      dispatch(getNotebooks());
    } else {
      return;
    }
  };
}
