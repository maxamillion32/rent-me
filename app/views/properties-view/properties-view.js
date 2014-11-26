'use strict';

angular.module('rentMeApp.propertiesView', ['ngRoute', 'tradeMeServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/look-in/:regionName/:regionId', {
    templateUrl: 'views/properties-view/properties-view.html',
    controller: 'PropertiesViewController'
  });
}])

.controller('PropertiesViewController', ['$scope', '$routeParams', 'PropertiesByRegion', function($scope, $routeParams, PropertiesByRegion) {
	$scope.properties = PropertiesByRegion.query({region: $routeParams.regionId});	

	console.log($scope.properties);
	$scope.regionId = $routeParams.regionId;
}]);