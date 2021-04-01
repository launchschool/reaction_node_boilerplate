import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCardRequest() {
  return { type: types.CREATE_CARD_REQUEST };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCardRequest() {
  return { type: types.FETCH_CARD_REQUEST };
}

export function editCardSuccess(card) {
  return { type: types.EDIT_CARD_SUCCESS, card };
}

export function editCardRequest() {
  return { type: types.EDIT_CARD_REQUEST };
}

export function createCard(card, callback) {
  return function (dispatch) {
    dispatch(createCardRequest());
    apiClient.createCard(card, (data) => {
      dispatch(createCardSuccess(data));

      if (callback) {
        callback();
      }
    });
  };
}

export function fetchCard(id) {
  return function (dispatch) {
    dispatch(fetchCardRequest());
    apiClient.fetchCard(id, (data) => {
      dispatch(fetchCardSuccess(data));
    });
  };
}


export function editCard(id, card) {
  return function (dispatch) {
    dispatch(editCardRequest());
    apiClient.editCard(id, card, (data) => {
      dispatch(editCardSuccess(data));
    });
  };
}