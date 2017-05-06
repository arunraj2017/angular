/**
 * controller class for app 
 */

"use strict";

angular
	.module("myApp")
	.controller("myController", function($scope, restServ) {

			var names = [ {
				"fname" : "arun",
				"lname" : "raj"
			}, {
				"fname" : "varun",
				"lname" : "raj"
			}, {
				"fname" : "divya",
				"lname" : "soman"
			}
		
			];
		
			$scope.names = names;
			
			getCities();
			
			function getCities() {
					restServ.getData()
							.then(function(response){
										var retval = response.data;
										var out =  JSON.stringify(retval.RestResponse.result);
										var out1 = retval.RestResponse.result;
										$scope.cities = JSON.parse(out);
									});
				
				}
			
	});

