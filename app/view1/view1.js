'use strict';

angular.module('rentMeApp.view1', ['ngRoute', 'rentMeServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Localities', function($scope, Localities) {
	$scope.localities = Localities.query();
}]);