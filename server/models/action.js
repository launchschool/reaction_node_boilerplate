const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
// {
//   "_id": 49,
//   "description": " added this card to My list",
//   "createdAt": "2020-10-08T17:54:55.319Z",
//   "updatedAt": "2020-10-08T17:54:55.319Z",
//   "card_id": 9
// }

const ActionSchema = new Schema({
  description: {
    type: String,
  },
  cardId: {
    type: Schema.Types.ObjectId,
    ref: "Card"
  },
},
{timestamps: true}
)
  
ActionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;