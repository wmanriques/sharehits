angular.module("dashboard",[])
.config(['$stateProvider',function ($sp) {
   $sp.
      state("dashboard",{
         url:"/dashboard",
         templateUrl:"js/dashboard/dashboard.html"
      })
}])
