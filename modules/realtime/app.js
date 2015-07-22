var restify = require('restify')
    , server = restify.createServer()
    , io = require('socket.io')(server.server);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());

// usernames which are currently connected to the chat
var usernames = {};

// rooms which are currently available in chat
var rooms = []

io.on('connection', function (socket) {

	socket.on('adduser', function(username, roomid){
		console.log("in server", username);
		console.log("in server2", roomid);
		var roomname="room"+roomid;

		var band = true;
		var n = rooms.length;
		for (var i=0; i < n; i++){
			if (rooms[i]==roomname){
				band=false;
			}
		}
		if (band){
			rooms.push(roomname);
		}
	    // we store the username in the socket session for this client
	    socket.username = username;
	    // store the room name in the socket session for this client
		//socket.room = roomname;
		// add the client's username to the global list
		usernames[username] = username;
		// send client to room 1
		//socket.join(roomname);

	    // echo to room 1 that a person has connected to their room
	    //socket.broadcast.to(roomname).emit('updatechat', 'SERVER', username + ' has connected to this room');
	    //socket.emit('updaterooms', rooms, roomname, username);
	    io.sockets.emit('updateusers', usernames);
	    console.log("termino");
	  });

});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});