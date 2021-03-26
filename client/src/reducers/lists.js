export default function lists(state = [], action) {
  switch (action.type) {
    // case "FETCH_CARD_SUCCESS": {
    //   return action.cards;
    // }
    case "FETCH_BOARD_SUCCESS": {
      let { lists } = action.data.board;

      // let listsId = lists.map(list => list.id);

      let listsWithout = lists.map(list => {
        let {cards, ...listWithout} = list;
        return listWithout;
      })

      // return state.filter(list => list.boardId !== action.data.board.id).concat(listsWithout)
      // return state.filter(list => !listsId.includes(list.id)).concat(listsWithout)
      console.log(state);
      return listsWithout;
    }
    // case "CREATE_CARD_SUCCESS": {
    //   const newCard = action.card;
    //   return state.concat(newCard);
    // }
    default:
      return state;
  }
}
