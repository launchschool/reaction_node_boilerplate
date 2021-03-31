/* eslint-disable no-console */
export default function cards(state = [], action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS": {
      return state.filter(card => card.id !== action.card.id).concat(action.card);
    }
    case "FETCH_BOARD_SUCCESS": {
      let cards = [];
      let { lists } = action.data.board;
      
      lists.forEach(list => {
        cards.push(list.cards);
      })

      return cards.flat();
    }
    case "CREATE_CARD_SUCCESS": {
      console.log(action);
      const newCard = action.card;
      return state.concat(newCard);
    }
    default:
      return state;
  }
}
