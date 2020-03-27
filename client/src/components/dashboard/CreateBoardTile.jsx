import React from "react";

const CreateBoardTile = props => (
  <li className="board-tile" onClick={props.onClick}>
    <a className="new-board">
      <span className="board-title">Create a new board...</span>
    </a>
  </li>
);

export default CreateBoardTile;
