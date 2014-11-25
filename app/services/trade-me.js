angular.module('rentMeServices', ['ngResource'])

.factory('Localities', ['$resource',
  function($resource){
    return $resource('https://api.trademe.co.nz/v1/Localities.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);