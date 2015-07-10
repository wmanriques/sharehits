angular.module("dashboard",[
   "models.user",
   "models.sala",
])
   .config(['$stateProvider',function ($sp) {
      $sp.
         state("dashboard",{
            url:"/",
            templateUrl:"/static/public/js/components/dashboard/dashboard.html",
            controller:"dashboardController"
         });
   }])
   .controller("dashboardController",["$scope","User","Sala",function ($scope,User,Sala) {
      console.log(Sala.salas);
      $scope.user  = User;
      $scope.salas = Sala.salas;
      $scope.logOut = function () {
         console.log("logout...");
      };

   }]);
