app.factory("socketService",function  (socketFactory) {
  return socketFactory({
                ioSocket:io.connect("http://localhost:5000")
  })
});

app.controller("roomController",function ($scope, ROOM_ID,User,socketService) {

      var sala = {
        "id": 4,
        "name": "Sonada Acustica",
        "image": "http://hdwallpaperia.com/wp-content/uploads/2013/12/Guitar-Music.jpg",
        "mode": "PUBLIC",
        "creator": "alexander",
        "tag": [
            {
                "id": 11,
                "name": "Blues rock"
            },
            {
                "id": 12,
                "name": "Hip-hop soul"
            },
            {
                "id": 13,
                "name": "Reggae"
            }
        ],
        "date_creation": "2015-07-15T02:07:59.340107Z"
      }
      $scope.sala = sala;
      $scope.members = [];
      //var imagePath ="http://graph.facebook.com/10206505176575445/picture?type=large";
      $scope.messages = [];
      /*
      $scope.messages = [
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          },
          {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
          }
      ];

      */
      $scope.songs = [];

      $scope.songs = [{}];


      $scope.toggleBox=[false,false,false];
      $scope.toggleBoxFunc= function (num){
            if($scope.toggleBox[num]==true){$scope.toggleBox[num]=false;}
            else{
                $scope.toggleBox=[false,false,false];
               $scope.toggleBox[num]=true;
            }
            console.log(num,$scope.toggleBox[num]);
       };
      
      socketService.emit("enter",{
        username:User.username,
        photoUrl:User.photoUrl,
        idUser:User.idUser,
        idRoom:ROOM_ID
      });

      socketService.on("members",function  (data) {
        $scope.members = data.data;
      })
      
      socketService.on("new member",function  (data) {
        console.log(data);
        $scope.members.push(data);
      });

      socketService.on("disconnect member",function  (data) {        
        for (var i = 0; i <$scope.members.length; i++) {
          if($scope.members[i].idUser == idUser){
            $scope.members.splice(i, 1);
          }
        }
      });

      $scope.enviarMensaje = function  (mensaje) {
        $scope.newMensaje = "";
        var data = {
          username:User.username,
          photoUrl:User.photoUrl,
          idUser:User.idUser,
          idRoom:ROOM_ID,
          mensaje:mensaje
        };
        socketService.emit("send message",data);
        $scope.messages.push(data);
      }

   });
