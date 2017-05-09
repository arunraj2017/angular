/**
 * router config for home
 * 
 */

angular
	.module("app")
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix("");
		$routeProvider
			.when("/posts", {
				template: "<posts-all></posts-all>",
			})
			.when("/posts/:postid", {
				template: "<post-single></post-single>"
			})
			.when("/comments", {
				template: "<comments-directive></comments-directive>"
			})
			.otherwise({
				redirectTo: "/posts"
			});
	});