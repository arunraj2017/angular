/**
 * promise definition
 */

"use strict"

		angular
			.module("appPromise", [])
			.factory("getData", function($timeout, $q) {
				return function() {
					var defer = $q.defer();
					$timeout(function() {
						defer.resolve("data resolved success");
					},2000)
					return defer.promise;
				}
				
			})
			.factory("getData2", function($q, $timeout) {
				return $q(function(resolve, reject) {
					$timeout(function() {
						if(Math.round(Math.random())){
							resolve("data received success");
						}else{
							reject("data failure");
						}
					},2000);
					
				});
				
			})
			.run(function(getData, getData2, $log) {
				var promise = getData().then(function(data) {
					console.log(data);
				});
				
				var promise2 = getData2.then(function(value) {
					$log.info(value);
				}, function(reason) {
					$log.info(reason);
				}, function(value) {
					$log.info(value);
				})
			});
			
		
