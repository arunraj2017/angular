/**
 * service class to call rest service
 */

"use strict";
angular
	.module("app")
	.factory("serviceFact", function($http) {
		var urlBase = "https://jsonplaceholder.typicode.com"
		var retObj = {};
		retObj.getPost = function(id){
			return $http.get(urlBase+'/posts/'+id);
		}
		retObj.getAllPosts = function() {
			return $http.get(urlBase+'/posts');
		}
		retObj.getComments = function() {
			return $http.get(urlBase+'/comments');
		}
		
		return retObj;
		
	});