'use strict';

/* Controllers */

angular.module('pocketYoutube.controllers', [])

.controller('HomeCtrl', ['$scope', '$http', 'youtubeService', function($scope, $http, youtubeService) {

  $scope.videos = youtubeService.getAll();
  $scope.videoExist = false;
  
  $scope.addToList = function(videoUrl) {
    var parser = document.createElement('a');
    parser.href = videoUrl;

    var videoId = parser.search.split('v=')[1];
    console.log("found videoId = " + videoId + " === " + parser.search.split('v=')[1]);
    if ((videoId == null) || (parser.hostname.split("youtube.com").length < 2)) {
      $scope.invalidUrl = true;
      return false;
    }
    var ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition != -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    var returnval = youtubeService.add(videoId);
    if (returnval == "111") {
      $scope.videoExist = true;
    } else if (returnval) {
      $scope.invalidUrl = false;
      $scope.videos = returnval;
    } else 
      $scope.invalidUrl = true;

  }
  $scope.orderProperty = "-uploaded";
  $scope.play=function(url){
    console.log("play called");
    $scope.playUrl = url;
  }

  $scope.delete = function(id){
    $scope.videos = youtubeService.delete(id);
  }
}]);