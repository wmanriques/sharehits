angular.module("sala",[])
   .config(['$stateProvider',function ($sp) {
      $sp.
         state("sala",{
            url:"/sala/:salaId",
            templateUrl:"/static/public/js/components/dashboard/sala/sala.html",
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
   }]);
