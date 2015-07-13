angular.module("utilService",[])
   .factory("UtilService",["$http","$q",function ($http,$q) {
      function Utils() {}
      Utils.prototype.isValidImage = function (imgSrc) {
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
      return new Utils();
   }]);
