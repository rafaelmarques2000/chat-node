let expressRouter = require('express').Router();
let defaultController = require('../controllers/usersController');

expressRouter.get('/',defaultController.index)

module.exports = expressRouter;
