let defaultRouter = require('../modules/default/routes/default');
let usersRouter = require('../modules/users/routes/users');
let cors = require('cors');
module.exports = function (app){
    app.use('/',cors(), defaultRouter);
    app.use('/chat-users',cors(), usersRouter);
}