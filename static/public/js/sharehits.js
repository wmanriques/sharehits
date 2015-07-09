angular.module("sharehits",[
   //Dependencias
   "ngMaterial",
   "ui.router",
   //Apps-modules
   "sala",
   "dashboard"

   ])
   .config(['$urlRouterProvider',function ($urp) {
      $urp.otherwise("/");
   }]);
