angular.module("login",[])
   .config(['$stateProvider',function ($sp) {
      $sp.
         state("login",{
            url:"/login",
            templateUrl:"js/login/login.html"
         })
   }])
