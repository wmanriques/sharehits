var restify = require('restify')
    , server = restify.createServer()
    , io = require('socket.io')(server.server);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());


var usernames = {};

io.on('connection', function (socket) {

	socket.on('adduser', function(username, roomid){
		console.log("in server", username);
		console.log("in server2", roomid);
	    // we store the username in the socket session for this client
	    socket.username = username;
	    // add the client's username to the global list
	    usernames[username] = username;
	    // echo to client they've connected
	    socket.emit('updatechat', 'SERVER', 'you have connected');
	    // echo globally (all clients) that a person has connected
	    socket.broadcast.emit('updatechat', 'SERVER', username + ' has connected');
	    // update the list of users in chat, client-side
	    io.sockets.emit('updateusers', usernames);
	  });

});

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});