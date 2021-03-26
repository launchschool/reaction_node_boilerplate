const Board = require("../models/board");
const List = require("../models/list");

const createList = async (req, res, next) => {
  let { boardId, list } = req.body;
  const foundBoard = await Board.findById(boardId);
  
  const newList = new List({title: list.title, boardId, position: 655350});
  let savedList = await newList.save()
  
  foundBoard.lists = foundBoard.lists.concat(savedList);
  await foundBoard.save();

  res.json(savedList);
};

exports.createList = createList;
