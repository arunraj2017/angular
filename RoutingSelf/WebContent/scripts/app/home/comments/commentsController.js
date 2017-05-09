/**
 * comments controller
 */

angular
	.module("app")
	.controller("commentsController",function(serviceFact){
		var vm = this;
		serviceFact
				.getComments()
				.then(function(result){
					vm.comments = result.data;
				});
	});