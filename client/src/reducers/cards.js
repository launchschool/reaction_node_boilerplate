export default function cards(state = [], action) {
  switch (action.type) {
    // case "FETCH_CARD_SUCCESS": {
    //   return action.cards;
    // }
    case "FETCH_BOARD_SUCCESS": {
      return state; // change state? into lists? into cards?
    }
    // case "CREATE_CARD_SUCCESS": {
    //   const newCard = action.card;
    //   return state.concat(newCard);
    // }
    default:
      return state;
  }
}
