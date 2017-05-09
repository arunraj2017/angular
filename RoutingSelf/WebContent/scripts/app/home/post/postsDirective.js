/**
 * Directives registeration for post and posts
 */

angular
	.module("app")
	.component("postsAll", {
		templateUrl: "partials/posts/posts.html",
		controller: "postsController",
		controllerAs: "postsCtrl"
	})
	.component("postSingle", {
		templateUrl: "partials/posts/post.html",
		controller: "postController"
			
	});