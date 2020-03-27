const express = require ('express');
const router = express.Router();
const Board = require('../models/board');

router.get('/boards', (req, res, next) => {
  Board.find({}, "title").then(data => res.json(data)).catch(next);
});

router.post('/boards', (req, res, next) => {
  if(req.body.title){
    Board.create(req.body).then(data => res.json(data)).catch(next);
  } else {
    res.json({error: "The input field is empty"})
  }
});

router.get('/boards/:id', (req, res, next) => {
  Board.findOne({"id": req.params.id}).then(data => res.json(data)).catch(next);
});

module.exports = router;