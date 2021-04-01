const express = require ('express');
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const commentsController = require("../controllers/commentsController");

// const actionsController = require('../controllers/actionsController');

const { validateBoard } = require("../validators/validators");


router.get('/boards',boardsController.getBoards );
router.get('/boards/:id', boardsController.getBoard );
router.post('/boards', validateBoard, boardsController.createBoard );
router.post('/lists', listsController.createList);
router.patch('/lists/:id', listsController.editList);
router.get('/cards/:id', cardsController.getCard);
router.put('/cards/:id', cardsController.updateCard);
router.patch('/cards/:id', cardsController.addAction);
router.post('/cards', cardsController.createCard);
router.post('/comments', commentsController.createComment);
// router.post('/actions/:id', actionsController.createAction);


// router.post('/testerboard', boardsController.seedBoard );

router.post('/testerlist', boardsController.seedList);
module.exports = router;