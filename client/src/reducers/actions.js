/* eslint-disable no-console */
export default function actions(state = [], action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS": {
      let {actions} = action.card;
      return actions;
    }
    default:
      return state;
  }
}
