/**
 * controller for posts.html
 */

angular
	.module("app")
	.controller("postsController", function($scope, serviceFact){
		serviceFact.getAllPosts().then(function(result) {
			$scope.posts = result.data;
		});
	})
	.controller("postController",function($scope, serviceFact,$routeParams){
		serviceFact.getPost($routeParams.postid).then(function(result){
			$scope.post = result.data;
		});
	});