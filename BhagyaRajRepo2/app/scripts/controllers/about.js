'use strict';
angular.module('bhagyarajCodingApp')
  .controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {
 
	$scope.instruction = "Enter The Coordinates";
	$scope.xCoords = 0;
	$scope.yCoords = 0;

    $scope.distAdd  = function () {
    	var arrPt = [];
    	var x = 0;
    	var y = 0;
    	var distance = 0;

    	$scope.points.forEach(function(elem, index, arr){
    		arrPt = elem.value.split(",");
    		x = Number(arrPt[0]);
    		y = Number(arrPt[1]);
    		distance = Math.sqrt(($scope.xCoords - x) * ($scope.xCoords - x) + ($scope.yCoords - y) * ($scope.yCoords - y));
    		elem.dist = distance; 
    	});

    };
	$http.get("../JsonData/generated.json").then(function(response){
		$scope.points = response.data.points;
		$scope.distAdd();

	});

	$scope.$watchGroup(['xCoords', 'yCoords'], function(){
		$scope.distAdd();
	});


    
}]);
