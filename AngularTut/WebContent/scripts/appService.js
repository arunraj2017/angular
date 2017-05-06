/**
 * service class for application
 */

angular
	.module("myApp")
	.factory("restServ", function($http) {
		
		return{
			getData : function(){
				return $http.get("http://services.groupkt.com/state/get/IND/all");
				} 
		}
		
	});
		