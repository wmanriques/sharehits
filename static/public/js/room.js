
app.controller("roomController",["$scope",function ($scope) {
      sala = {
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
      $scope.songs=[
          {
              songName:"Hombre lobo en parís",
              songAuthor:"La Unión"
          },
          {
              songName:"Pronta entrega",
              songAuthor:"Virus"
          },
          {
              songName:"Haló",
              songAuthor:"Beyonce"
          },
          {
              songName:"Time in a bottle",
              songAuthor:"Jim Croce"
          },
          {
              songName:"Pronta entrega",
              songAuthor:"Virus"
          },
          {
              songName:"Haló",
              songAuthor:"Beyonce"
          },
          {
              songName:"Time in a bottle",
              songAuthor:"Jim Croce"
          }
      ];
   }]);
