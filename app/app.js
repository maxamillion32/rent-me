'use strict';

// Declare app level module which depends on views, and components
angular.module('rentMeApp', [
  'ngRoute',
  'rentMeApp.view1',
  'rentMeApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
