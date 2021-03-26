export default function cards(state = [], action) {
  switch (action.type) {
    // case "FETCH_CARD_SUCCESS": {
    //   return action.cards;
    // }
    case "FETCH_BOARD_SUCCESS": {
      let cards = [];
      let { lists } = action.data.board;
      
      lists.forEach(list => {
        cards.push(list.cards);
      })

      return cards.flat();
    }
    // case "CREATE_CARD_SUCCESS": {
    //   const newCard = action.card;
    //   return state.concat(newCard);
    // }
    default:
      return state;
  }
}
