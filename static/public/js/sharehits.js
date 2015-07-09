angular.module("sharehits",[
   //Dependencias
   "ngMaterial",
   "ui.router",
   //Apps-modules
   "login",
   "dashboard"

   ])
   .config(['$urlRouterProvider',function ($urp) {
      $urp.otherwise("/")
   }]);
