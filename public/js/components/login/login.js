angular.module("login",[])

   .config(['$stateProvider',function ($sp) {
      $sp.
         state("login",{
            url:"/login",
            templateUrl:"js/components/login/login.html",
            controller:"loginController"
         })
   }])

   .controller("loginController",["$scope","$state",function ($scope,$state) {
      $scope.loginFacebook = function () {
         console.log("Implementar login con facebook");
         $state.go("dashboard");
      }
   }])
