angular.module("sala",[])
   .config(['$stateProvider',function ($sp) {
      $sp.
         state("sala",{
            url:"/sala/:salaId",
            templateUrl:"/static/public/js/components/sala/sala.html",
            controller:"salaController",
            resolve:{
               salas : function (SalaService) {
                  return SalaService.getSalas();
               },
               sala : function ($stateParams,salas) {
                  var index = salas.map(function (sala) {return sala.idSala;}).indexOf(parseInt($stateParams.salaId));
                  return salas[index];
               }
            }
         });
   }])
   .controller("salaController",["$scope","sala",function ($scope,sala) {
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

      $scope.toggleBox=[false,false,false];
      $scope.toggleBoxFunc= function (num){
            if($scope.toggleBox[num]==true){$scope.toggleBox[num]=false;}
            else{
                $scope.toggleBox=[false,false,false];
                $scope.toggleBox[num]=true;
            }
//            console.log(num,$scope.toggleBox[num]);
      };
   }]);
