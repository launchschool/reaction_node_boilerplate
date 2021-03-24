export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case "FETCH_BOARD_SUCCESS": {
      // remove list from board
    }
    default:
      return state;
  }
}

// Need list actions and card actions
// list actions will remove cards from list on Fetch Success

// always call cards reducer, list reducer, board reducer
// dispatch as few actions as possible
// but all reducers will listent