angular.module("crearsala",[])
   .controller("crearSalaController",["$scope", "$mdDialog",function ($scope,$mdDialog) {
      $scope.hide = function() {
         console.log("Evento hide")
         $mdDialog.hide();

      };
      $scope.cancel = function() {
         console.log("Cancel");
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
         console.log("answer")
         $mdDialog.hide(answer);
      };
   }]);
