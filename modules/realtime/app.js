var restify = require('restify')
    , server = restify.createServer()
    , io = require('socket.io')(server.server);

var usernames = {};
salas = {}
io.on('connection', function (socket) {
	socket.on('adduser', function(username, roomid){
		console.log("agregando usuario..");
		console.log(username, roomid);
		
		//socket.username = username;
		
		//socket.room = 'room'+roomid;
		io.socket.join('room'+roomid);


		socket.emit('updateusers', roomid, socket.clients('rooms'+roomid));
	});
});


server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});