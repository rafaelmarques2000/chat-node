let expressRouter = require('express').Router();
let defaultController = require('../controllers/defaultController');

expressRouter.get('/',defaultController.index)

module.exports = expressRouter;
