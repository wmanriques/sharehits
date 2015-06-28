angular.module("sharehits",[
   "ui.router",
   "login",
   "dashboard"
   ])
   .config(['$urlRouterProvider',function ($urp) {
      $urp.otherwise("/")
   }]);
