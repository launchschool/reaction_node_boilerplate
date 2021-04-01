const Card = require("../models/card");
const List = require("../models/list");
const Comment = require("../models/comment");
const Action = require("../models/action");
// Actions are created on backend

const getCard = async (req, res, next) => {
  try {
    const id = req.params.id;

    let foundCard = await Card.findById(id).populate([{path: "comments"}, {path: "actions"}]);
    if (foundCard) {
      res.json(foundCard);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
};

const createCard = async (req, res, next) => {
  const { listId, card } = req.body;
  const foundList = await List.findById(listId);

  const newCard = new Card({
    title: card.title,
    dueDate: null,
    listId: listId,
    boardId: foundList.boardId,
    description: "",
    position: 655350,
  });
  let savedCard = await newCard.save();
  foundList.cards = foundList.cards.concat(savedCard.id);
  await foundList.save();

  res.json(savedCard);
};

const updateCard = async (req, res, next) => {
  try {
    const { card } = req.body;
    let id = req.params.id;
    const updatedCard = await Card.findByIdAndUpdate(
      id,
      { ...card },
      { new: true }
    );
    res.json(updatedCard);
  } catch (err) {
    next(err);
  }
};

const addAction = async (req, res, next) => {
  try {
    const cardId = req.params.id;
    const {action} = req.body;
    
    const foundCard = await Card.findById(cardId);

    const newAction = new Action({...action, cardId});
    let savedAction = await newAction.save()

    foundCard.actions = foundCard.actions.concat(savedAction.id);
    await foundCard.save();

    res.json(savedAction);
  } catch (err) {
    next(err);
  }
}

exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.addAction = addAction;