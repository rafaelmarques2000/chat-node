const userFacade = require('../../../modules/users/Facade/usersFacade');

module.exports = function (io,socket){
    socket.on('disconnect', function (){
        userFacade.unregisterUser({socketServerSessionID: socket.id});
        io.emit("updateList");
    })
}