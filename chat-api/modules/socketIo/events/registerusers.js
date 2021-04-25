const userFacade = require('../../../modules/users/Facade/usersFacade');

module.exports = function (io,socket){
    socket.on('registeruser', function (data){
        userFacade.registerUser({nickname:data.nickname,color: data.color,socketServerSessionID: socket.id});
        io.emit("updateList");
    });
}