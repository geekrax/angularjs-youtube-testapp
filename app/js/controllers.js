'use strict';

/* Controllers */

angular.module('pocketYoutube.controllers', [])

.controller('HomeCtrl', ['$scope','$http', function($scope,$http) {
  
  //Set welcome message (just a simple for test)
  $scope.welcome_message = 'Welcome to Pocket Youtube';

  // Initially, use static data
  // Reference : http://docs.angularjs.org/tutorial/step_05
  $http.get('videos/list.json').success(function(data) {
  	$scope.videos = [];
    data.forEach(function(video){
    	$scope.videos.push(video.data.items[0]);
    });
  });
 

}]);