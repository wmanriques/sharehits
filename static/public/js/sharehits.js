angular.module("sharehits", [
        //Dependencias
        "ngMaterial",
        "ui.router",
        //Apps-modules
        "sala",
        "dashboard"

    ])
    .config(['$urlRouterProvider', function ($urp) {
        $urp.otherwise("/");
    }])
    .controller('mainController',['$scope', function($scope){
         $scope.safeApply = function (fn) {
            var phase;
            if(this.$root!==null){
              phase = this.$root.$$phase;
            }
            if (phase == '$apply' || phase == '$digest') {
              if (fn && (typeof(fn) === 'function')) {
                fn();
              }
            } else {
              this.$apply(fn);
            }
          };
        $scope.imgs=[false,true,false];
        var i=1;
        var interIni=setInterval(function () {
                if(i<2){i++;}
                else {i=0;}
                $scope.safeApply(function () {
                    $scope.imgs=[false,false,false];
                    $scope.imgs[i]=true;
                });
//              clearInterval(interIni);
        },4000);
    }]);
