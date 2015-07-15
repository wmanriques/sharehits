angular.module("sharehits", [
        "ngMaterial",
    ])
	
	.service('RoomFactory', ['$http', function ($http) {
	    return {
	        getAll: function () {
	            return $http.get('http://localhost:8000/api/rooms/public');
	        }
	    }
	}])

    .controller('mainController', function($scope, RoomFactory){
         RoomFactory.getAll().then(function(res){
         	
	        $scope.salas = [];
	        res.data.forEach(function(item){
	        	$scope.salas.push(item);
	        })
	        return $scope;
	    })
    });