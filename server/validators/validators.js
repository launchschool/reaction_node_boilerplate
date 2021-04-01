const {check} = require('express-validator');

exports.validateBoard = [check("board.title").not().isEmpty()];
