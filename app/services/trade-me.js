angular.module('rentMeServices', ['ngResource'])

.factory('Localities', ['$resource',
	function($resource){
		return $resource('https://api.trademe.co.nz/v1/Localities.json', {}, {
		query: {method:'GET', isArray:true}
	});
}])

.factory('PropertiesByRegion', ['$resource',
	function($resource) {
		return $resource('https://api.tmsandbox.co.nz/v1/Search/Property/Rental.json', {}, {
			query: {
				method:'GET', 
				params: {
					region:undefined,
					oauth_consumer_key: trademe.credentials.oauth_consumer_key,
					oauth_signature_method: 'PLAINTEXT',
					oauth_signature: trademe.credentials.oauth_signature
				}
			}, 
			isArray:false
	});
}]);