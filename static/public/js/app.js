
app.service('RoomFactory', ['$http', function ($http) {
    return {
        getAll: function () {
            return $http.get('http://localhost:8000/api/rooms/public');
        }
    }
}]);

app.service('RoomUserFactory', ['$http', 'user', function ($http, user) {
	user_auth=user.username
	//user_auth="alexander"
    return {
        getAll: function () {
            return $http.get('http://localhost:8000/api/'+user_auth+'/rooms/');
        }
    }
}]);

app.controller('mainController', function($scope, RoomFactory, RoomUserFactory){
     RoomFactory.getAll().then(function(res){
        $scope.salas = [];
        res.data.forEach(function(item){
        	$scope.salas.push(item);
        })
        return $scope;
    })

    RoomUserFactory.getAll().then(function(res){
        $scope.mis_salas = [];
        res.data.forEach(function(item){
        	$scope.mis_salas.push(item);
        })
        return $scope;
    })

    $scope.in_room = function(roomid){
        console.log(userid);
        console.log(roomid);
        var data={
            roomid:roomid,
            userid:userid,
            csrfmiddlewaretoken: csrf_token,
        }
        $.ajax({
            url: "/api/add/user/room/",
            type: "POST",
            dataType: "json",
            enctype: "multipart/form-data",
            data: data,

            success: function (data) {
                console.log(data);
                alert("holi");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                
            }
        });

        //socket.emit('adduser', username, roomid); 
    }
});