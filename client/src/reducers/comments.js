/* eslint-disable no-console */
export default function comments(state = [], action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS": {
      let {comments} = action.card;
      return comments;
    }
    default:
      return state;
  }
}
