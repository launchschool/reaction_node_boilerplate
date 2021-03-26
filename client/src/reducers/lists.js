export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      let { lists } = action.data.board;

      let listsWithout = lists.map(list => {
        let {cards, ...listWithout} = list;
        return listWithout;
      })

      return listsWithout;
    }
    case "CREATE_LIST_SUCCESS": {
      let list = action.list;
      return state.concat(list)
    }
    default:
      return state;
  }
}
