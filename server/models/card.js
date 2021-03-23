const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    title: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    labels: [
      { 
        type: String
      }
    ],
    description: {
      type: String,
    },
    listId: {
      type: Schema.Types.ObjectId,
      ref: "List"
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board"
    },
    position: {
      type: Number
    }
  }
)

CardSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;