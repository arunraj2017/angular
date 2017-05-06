/**
 * controller for posts.html
 */

angular
	.module("app")
	.controller("postsController", function($scope, serviceFact,$route){
		serviceFact.getAllPosts().then(function(result) {
			$scope.posts = result.data;
		});
		
		$scope.reloadData = function() {
			$route.reload();
		}
	})
	.controller("postController",function($scope, serviceFact,$routeParams){
		serviceFact.getPost($routeParams.postid).then(function(result){
			$scope.post = result.data;
		});
	});