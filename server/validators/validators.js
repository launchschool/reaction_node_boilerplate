const {check} = require('express-validator');

exports.validateBoard = [check("title").not().isEmpty()];
