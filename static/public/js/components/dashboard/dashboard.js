angular.module("dashboard",[
   "crearsala",
])
.config(['$stateProvider',function ($sp) {
   $sp.
      state("dashboard",{
         url:"/",
         templateUrl:"/static/public/js/components/dashboard/dashboard.html",
         controller:"dashboardController",
         resolve:{
            salas : function (SalaService) {
               return SalaService.getSalas();
            }
         }
      });
}])
.controller("dashboardController",["$scope","$mdDialog","SalaService","salas",function ($scope,$mdDialog,SalaService,salas) {
   $scope.salas = salas;


   $scope.crearSala = function(ev) {
      $mdDialog.show({
         controller: "crearSalaController",
         templateUrl: '/static/public/js/components/dashboard/crearsala/crearsala.html',
         parent: angular.element(document.body),
         clickOutsideToClose:true,
         targetEvent: ev
      })
      .then(function(sala) {
         console.log(sala);
         salas.unshift(sala);
      }, function() {
         console.log("cancelo creo");
      });
   };
}]);
