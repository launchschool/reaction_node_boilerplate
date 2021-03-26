export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "FETCH_BOARD_SUCCESS": {
      const { lists, ...boardWithout } = action.data.board;
      return state
        .filter((board) => board.id !== action.data.board.id)
        .concat(boardWithout);
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    default:
      return state;
  }
}

// [{title, lists}, {title, lists}, {title}, ]

// board1: {
//   title:
//   lists: [listid1, listid2]
// }

// [{title:, id:}]
