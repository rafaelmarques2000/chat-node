let server = require('./config/server');
let http = require('http').createServer(server);
let io = require('socket.io')(http,{
    cors: {
        origin: '*',
        credentials: false
    },
    transports:['websocket']
});


let disconnectEvents = require('./modules/socketIo/events/disconnect');
let registerUsersEvents = require('./modules/socketIo/events/registerusers');
let chatEvents = require('./modules/socketIo/events/chat');
io.on("connection", function (socket){
     console.log('conectado');
     registerUsersEvents(io,socket);
     chatEvents(io,socket);
     disconnectEvents(io,socket);
});

http.listen(3000,function (){
    console.log('conexao OK ');
})
