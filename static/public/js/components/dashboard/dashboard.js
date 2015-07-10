angular.module("dashboard",[
   "models.user",
   "models.sala",
   "crearsala"
])
.config(['$stateProvider',function ($sp) {
   $sp.
      state("dashboard",{
         url:"/",
         templateUrl:"/static/public/js/components/dashboard/dashboard.html",
         controller:"dashboardController"
      });
}])
.controller("dashboardController",["$scope","$mdDialog","User","Sala",function ($scope,$mdDialog,User,Sala) {
   console.log(Sala.salas);
   $scope.user  = User;
   $scope.salas = Sala.salas;

   $scope.crearSala = function(ev) {
      $mdDialog.show({
         controller: "crearSalaController",
         templateUrl: '/static/public/js/components/dashboard/crearsala/crearsala.html',
         parent: angular.element(document.body),
         clickOutsideToClose:true,
         targetEvent: ev
      })
      .then(function(answer) {
         console.log(answer);
      }, function() {
         console.log("cancelo creo");
      });
   };
}]);
