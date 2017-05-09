/**
 * directive configuration for comments
 */
angular
	.module("app")
	.directive("commentsDirective", function(){
		
		return{
			restrict: "AE",
			templateUrl: "partials/comments/comments.html",
			replace: true,
			controller: "commentsController",
			controllerAs: "commController"
		}
	})

