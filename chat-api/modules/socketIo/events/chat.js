
module.exports = function (io,socket){
    socket.on('sendMessage', function (data){
        io.emit("receptMessage", data );
    });

    socket.on('sendTyping', function (data){
        socket.broadcast.emit('detectTyping', data);
    });
    socket.on('clearTyping', function (){
        socket.broadcast.emit('detectClearTyping');
    });
}