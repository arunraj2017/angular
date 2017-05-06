/**
 * home page 
 */

"use strict";

angular
	.module("app")
	.controller("homeController", function($scope){
	
		var items = [
		            {item : "posts"},
		            {item : "albums"},
		            {item : "comments"},
		            {item : "photos"},
		            {item : "todos"},
		            {item : "users"}
		            ];
		$scope.items=items;
		
	});
	
