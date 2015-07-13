angular.module("salaService",[])
   .factory("SalaService",["$http","$q",function ($http,$q) {
      var salas = [];
      var Sala = function (){
      };

      Sala.prototype.getSalas = function (){
         var def = $q.defer();
         if(!salas.length){
            $http.get("/static/public/js/salas.json")
               .success(function (data) {
                  salas = data.salas;
                  def.resolve(data.salas);
               })
               .error(function (err,status) {
                  def.reject(err);
               });
               return def.promise;
         }else{
            return salas;
         }
      };

      Sala.prototype.isValidImage = function (imgSrc) {
         var def = $q.defer();
         var image = new Image();
         image.src = imgSrc;

         image.onerror = function () {
            def.resolve(false);
         };
         image.onload = function () {
            def.resolve(true);
         };
         return def.promise;
      };
      return new Sala();
   }]);
