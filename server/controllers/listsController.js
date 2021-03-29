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

const editList = async (req, res, next) => {
  try {
    let { title } = req.body;
    console.log(req.body);
    let id = req.params.id
    const updatedList = await List.findByIdAndUpdate(id, { title }, { new: true });
    
    res.json(updatedList);
  } catch(err) {
    next(err);
  }
};

exports.createList = createList;
exports.editList = editList;
