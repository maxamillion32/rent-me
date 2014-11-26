'use strict';

// Declare app level module which depends on views, and components
angular.module('rentMeApp', [
  'ngRoute',
  'rentMeApp.localityView',
  'rentMeApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/where'});
}]);
