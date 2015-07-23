var sala = require("socket.io")(5000);

var salas = {};

function  existeRoom(idRoom) {
	return salas.hasOwnProperty(idRoom);
}

function  buscarMiembro(idRoom,idUser) {
	if(existeRoom(idRoom)){
		var s = salas[idRoom];
		for (var i = 0; i <s.length; i++) {
			if(s.idUser == idUser){
				return i;
			}
		}
	}
}

function  eliminarMiembroSala(idRoom,idUser) {
	if(existeRoom(idRoom)){
		var i = buscarMiembro(idRoom,idUser);
		salas[idRoom].splice(i, 1);

		if(salas[idRoom].length<1){
			delete salas[idRoom];
		}
	}

}

sala.sockets.on("connection",function  (socket) {
	
	socket
	.on("enter",function  (data) {
		console.log("Alguien entro..");
		console.log(data);
		socket.idUser = data.idUser;
		socket.idRoom = data.idRoom;

		socket.join(data.idRoom);
		
		if(!existeRoom(data.idRoom)){
			salas[data.idRoom]=[];
		}

		salas[data.idRoom].push(data);

		socket.broadcast.to(data.idRoom).emit("new member",{data:data});
		
		socket.emit("members",{data:salas[data.idRoom]});
	})	
	.on("send message",function  (data) {
		console.log("Alguien mando un mensaje..");
		console.log(data);
		socket.to(data.idRoom).emit("message",{data:data});
	})
	.on("disconnect",function () {
		console.log("Alguien salio");
		sala.to(socket.idRoom).emit("disconnect member",{data:socket.idUser})
		//socket.broadcast.to(socket.idRoom).emit("new member",{data:data});
		eliminarMiembroSala(socket.idRoom,socket.idUser);
		console.log(salas);
		
	})


})


console.log("Chat iniciado en localhost:5000");