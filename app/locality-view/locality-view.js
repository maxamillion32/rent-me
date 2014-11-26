'use strict';

angular.module('rentMeApp.localityView', ['ngRoute', 'tradeMeServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/where', {
    templateUrl: 'locality-view/locality-view.html',
    controller: 'LocalityViewController'
  });
}])

.controller('LocalityViewController', ['$scope', 'Localities', function($scope, Localities) {
	$scope.localities = Localities.query();
}]);