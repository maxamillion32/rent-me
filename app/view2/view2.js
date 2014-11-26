'use strict';

angular.module('rentMeApp.view2', ['ngRoute', 'rentMeServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/look-in/:regionName/:regionId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', 'PropertiesByRegion', function($scope, $routeParams, PropertiesByRegion) {
	$scope.properties = PropertiesByRegion.query({region: $routeParams.regionId});	

	console.log($scope.properties);
	$scope.regionId = $routeParams.regionId;
}]);