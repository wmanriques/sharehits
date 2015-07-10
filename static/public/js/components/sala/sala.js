angular.module("sala",[])
   .config(['$stateProvider',function ($sp) {
      $sp.
         state("sala",{
            url:"/sala/:salaId",
            templateUrl:"/static/public/js/components/sala/sala.html",
            controller:"salaController",
            resolve:{
               sala : function ($stateParams,Sala) {
                  var index = Sala.salas.map(function (sala) {return sala.id;}).indexOf(parseInt($stateParams.salaId));
                  return Sala.salas[index];
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
      ]
   }]);
