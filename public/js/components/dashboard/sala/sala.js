angular.module("dashboard",[])
   .config(['$stateProvider',function ($sp) {
      $sp.
         state("dashboard.sala",{
            url:"/sala/:salaId",
            templateUrl:"js/components/dashboard/sala.html",
            controller:"salaController"
         })
   }])
   .controller("salaController",["$scope",function ($scope) {
      $scope.sala = "Sala test";
   }])
