// Protect variables - JS Best practices
var artistControllers = angular.module('artistControllers', []);

//List Controller - load and list data from your json file
artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

//Details Controller - load the detail of each person from your json file
artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;
    
//Next and Previous item buttons on details page to go up or down the artists array.
    if($routeParams.itemId > 0) {
    	$scope.prevItem = Number($routeParams.itemId)-1;
    } else {
    	$scope.prevItem = $scope.artists.length-1;
    }

    if($routeParams.itemId < $scope.artists.length-1) {
    	$scope.nextItem = Number($routeParams.itemId)+1;
    } else {
    	$scope.nextItem = 0;
    }

  });
}]);
