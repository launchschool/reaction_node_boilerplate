const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: "Board",
  },
  position: {
    type: Number
  },
  cards: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Card'
    }
  ]
},
{timeStamps: true}
)

ListSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
})

const List = mongoose.model('List', ListSchema);

module.exports = List;