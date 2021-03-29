const Card = require("../models/card");
const List = require("../models/list");

const getCard = async (req, res, next) => {
  try {
    const id = req.params.id;

    let foundCard = await Card.findById(id);
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
  const {listId, card} = req.body;
  const foundList = await List.findById(listId);

  const newCard = new Card({title: card.title, dueDate: null, listId: listId, boardId: foundList.boardId, description: "", position: 655350});
  let savedCard = await newCard.save()
  foundList.cards = foundList.cards.concat(savedCard.id);
  await foundList.save();

  res.json(savedCard);
};

exports.getCard = getCard;
exports.createCard = createCard;