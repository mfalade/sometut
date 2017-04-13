var shopify = angular.module('Shopify');

shopify.factory('jobs', ['$resource', function($resource) {
	return $resource('/api/jobs');
}]);