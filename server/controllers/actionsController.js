const Card = require("../models/card");
const Action= require("../models/action");

// Incoming payload:
// {
//   "action": {
//     "text": "This is my comment"
//   }
// }
const createAction = async (req, res, next) => {
  const cardId = req.params.id;
  const {action} = req.body;
  
  const foundCard = await Card.findById(cardId);

  const newAction = new Action({...action, cardId});
  let savedAction = await newAction.save()

  foundCard.actions = foundCard.actions.concat(savedAction.id);
  await foundCard.save();

  res.json(savedAction);
};

exports.createAction = createAction;