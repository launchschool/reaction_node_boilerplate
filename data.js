  Lists

  {
    "title": "CSS",
    "boardId": ObjectId("605a2e30393372eef6b19cbc"),
    "position": 65535.0,
    "cards": [ ObjectId("605acf44a551fa27cb0d16b0"),
    ]
  }

  {
    "title": "Seals",
    "boardId": ObjectId("605a2e30393372eef6b19cbc"),
    "position": 5000.0,
    "cards": [ 
    ]
  }

Card

{
  "title": "1",
  "dueDate": null,
  "labels": [
    "red",
    "purple"
  ],
  "description": "Selectors",
  "listId": ObjectId("605acef6a551fa27cb0d16af"),
  "boardId": ObjectId("605a2e30393372eef6b19cbc"),
  "position": 65535.0,
}

db.lists.findAndModify({
    query: {},
    update: {  "title": "CSS",
    "boardId": ObjectId("605a2e30393372eef6b19cbc"),
    "position": 65535.0, cards: [ ObjectId("605acf44a551fa27cb0d16b0")
    ]},
    new: true
});

db.boards.findAndModify({
    query: {},
    update: { title : "Web dev", lists: [ ObjectId("605acef6a551fa27cb0d16af")
    ]},
    new: true
});