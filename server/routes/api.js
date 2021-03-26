const express = require ('express');
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const { validateBoard } = require("../validators/validators");


router.get('/boards',boardsController.getBoards );
router.get('/boards/:id', boardsController.getBoard );
router.post('/boards', validateBoard, boardsController.createBoard );
router.post('/lists', listsController.createList);

// router.post('/testerboard', boardsController.seedBoard );

router.post('/testerlist', boardsController.seedList);
router.post('/testercard', boardsController.seedCard);
module.exports = router;