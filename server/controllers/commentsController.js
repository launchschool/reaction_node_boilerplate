const Card = require("../models/card");
const Comment = require("../models/comment");

// Incoming payload:
// {
//   "cardId": 9,
//   "comment": {
//     "text": "This is my comment"
//   }
// }
const createComment = async (req, res, next) => {
  const {cardId, comment} = req.body;
  
  const foundCard = await Card.findById(cardId);

  const newComment = new Comment({...comment, cardId});
  let savedComment = await newComment.save()

  foundCard.comments = foundCard.comments.concat(savedComment.id);
  await foundCard.save();

  res.json(savedComment);
};

exports.createComment = createComment;

// COmment Schema:
// {
//   "_id": 3,
//   "text": "This is my comment",
//   "cardId": 9,
//   "createdAt": "2020-10-08T18:23:59.803Z",
//   "updatedAt": "2020-10-08T18:23:59.803Z"
// }