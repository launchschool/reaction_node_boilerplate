import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function editListSuccess(list) {
  return { type: types.EDIT_LIST_SUCCESS, list };
}

export function editListRequest() {
  return { type: types.EDIT_LIST_REQUEST };
}

export function createList(list, callback) {
  return function (dispatch) {
    dispatch(createListRequest());
    apiClient.createList(list, (data) => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}

export function editListTitle(list) {
  return function (dispatch) {
    dispatch(editListRequest());
    apiClient.editList(list, (data) => {
      dispatch(editListSuccess(data));
    });
  };
}

