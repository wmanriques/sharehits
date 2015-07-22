
app.controller("roomController",["$scope", "ROOM_ID",function ($scope, ROOM_ID) {
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
      
      var imagePath="https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-prn2/976318_531172143604437_1180814581_o.jpg";

      $scope.listMembersChat=[
          {
            face : imagePath,
            name:"Bruce"
          },
          {
            face : imagePath,
            name:"Bruce"
          },
          {
            face : imagePath,
            name:"Bruce"
          },
          {
            face : imagePath,
            name:"Bruce"
          },
          {
            face : imagePath,
            name:"Bruce"
          },
          {
            face : imagePath,
            name:"Bruce"
          }
      ];
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
      $scope.songs = [];

      $scope.toggleBox=[false,false,false];
      $scope.toggleBoxFunc= function (num){
            if($scope.toggleBox[num]==true){$scope.toggleBox[num]=false;}
            else{
                $scope.toggleBox=[false,false,false];
               $scope.toggleBox[num]=true;
            }
            console.log(num,$scope.toggleBox[num]);
       };
//    var iframe = document.querySelector('#sc-player');
//    var scPlayerSrcPrefix = "https://w.soundcloud.com/player/?url=";
//    var scPlayerOPtions = "&hide_related=true&visual=true&auto_play=true&download=false&buying=false&sharing=false";
//
//    $.ajax({
//        method: "GET",
//        url: "http://localhost:8000/api/songs/room/"+ROOM_ID+"/?format=json"
//        /*data: { name: "John", location: "Boston" }*/
//    }).done(function(data) {
//        if (data.length == 0){
//            $(".reproduct-music").html("<b>Sin canciones aun!</b>");
//        }else{
//            $scope.songs.push(data[0]);
//            var firstSongUrl = data[0].url;
//            iframe.src = scPlayerSrcPrefix+firstSongUrl+scPlayerOPtions;
//        }
//    });
        

   }]);
