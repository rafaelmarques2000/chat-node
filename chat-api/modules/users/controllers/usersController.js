const userFacade = require('../Facade/usersFacade');
class UsersController {
    async index(req,res,next){
        let users = await userFacade.getChatUsers();
        res.send(users,200);
    }
}

module.exports = new UsersController();