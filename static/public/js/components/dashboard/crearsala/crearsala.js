angular.module("crearsala",[])
   .controller("crearSalaController",["$scope", "$mdDialog","SalaService","UtilService",function ($scope,$mdDialog,SalaService,UtilService) {

      $scope.sala = {
         tags:[]
      };
      $scope.tag = "";
      $scope.spinner = null;
      
      $scope.cancel = function() {
         $mdDialog.cancel();
      };
      $scope.verifyImg = function (imgSrc) {
         $scope.spinner = true;
         UtilService.isValidImage(imgSrc)
            .then(function (result) {
               $scope.spinner = false;
               $scope.salaForm.img.$setValidity("imgValid",result);
            });
      };

      $scope.agregarTag = function (tag) {
         $scope.tag = "";
         $scope.sala.tags.push(tag);
      };

      //REVISAR - FALTA PULIR
      $scope.checkTags = function(tags){
         $scope.salaForm.tag.$setValidity("tagSize",(tags.length>0));
         return (tags.length>0);
      };

      $scope.aceptar = function(sala) {
         sala.idSala = SalaService.getSalas().length +1;
         $mdDialog.hide(sala);
      };
   }]);
