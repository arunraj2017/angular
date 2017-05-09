/**
 * controller for posts.html
 */

angular
	.module("app")
	.controller("postsController", function( serviceFact,$route,$scope){
		var vm = this;
		serviceFact.getAllPosts().then(function(result) {
			vm.posts = result.data;
		});
		
		this.reloadData = function() {
			$route.reload();
		}
		
		$scope.$on("$routeChangeStart", function(event,next,current) {
			if(!confirm("Are you sure  you want to navigate to "+next.$$route.originalPath)){
				event.preventDefault();
			}
		});
		
	})
	.controller("postController",function($scope, serviceFact,$routeParams){
		serviceFact.getPost($routeParams.postid).then(function(result){
			$scope.post = result.data;
		});
	});