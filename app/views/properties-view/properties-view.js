'use strict';

angular.module('rentMeApp.propertiesView', ['ngRoute', 'tradeMeServices'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/look-in/:regionName/:regionId', {
    templateUrl: 'views/properties-view/properties-view.html',
    controller: 'PropertiesViewController'
  });
}])

.controller('PropertiesViewController', ['$scope', '$routeParams', 'PropertiesByRegion', function($scope, $routeParams, PropertiesByRegion) {
	
	var maxPrice = 0, 
		minPrice = 0;

	var properties = PropertiesByRegion.query({region: $routeParams.regionId});
	$scope.properties = properties;	
	
	properties.$promise.then(function(result) {
		setPriceRange(result.List);
	})

	function setPriceRange(propertyList) {

		//hack: force a high min price so that Math.min works, otherwise min will always be zero
		//or you will need two loops, firstly to find the max price, then set the min price to the max at the start
		minPrice = 10000000; 

		for (var i=0; i < propertyList.length; i++) {
			var rentPerWeek = propertyList[i].RentPerWeek;
			maxPrice = Math.max(rentPerWeek, maxPrice);
			minPrice = Math.min(rentPerWeek, minPrice);
		}
		$scope.maxPrice = maxPrice;
		$scope.minPrice = minPrice;
	}

	$scope.regionId = $routeParams.regionId;
}])

.filter('meetCriteria', function () {
	return function (items, minPrice) {
		var filtered = [];
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.RentPerWeek > minPrice) {
				filtered.push(item);
			}
		}
		return filtered;
	};
});
