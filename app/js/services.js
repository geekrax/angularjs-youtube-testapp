'use strict';

/* Services */

angular.module('pocketYoutube.services', ['LocalStorageModule']).
value('version', '0.1').
value('youtubeApi', 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=jsonc&q=').
factory('youtubeService', ['$http', 'localStorageService', 'youtubeApi', function($http, localStorageService, youtubeApi) {
  function youtubeService() {

    this.add = function(id) {
      var videosList = this.getAll();
      
      var isRepeated = false;
      videosList.forEach(function(video) {
        isRepeated = (video.id == id);
      });
      if (isRepeated) return "111";

      var apiUrl = youtubeApi + id + "&max-results=1";
      var result = $http.jsonp(apiUrl + "&callback=JSON_CALLBACK").then(function(response) {

        if (response.data.data.totalItems == 0) return false;

        videosList.push(response.data.data.items[0]);
        localStorageService.add('youtube-videos', angular.toJson(videosList));

        return videosList;
      });
      return result;
    }


    this.getAll = function() {
      var videosList = angular.fromJson(localStorageService.get('youtube-videos'));
      if (!videosList) {
        localStorageService.add('youtube-videos', '');
        videosList = [];
      }
      return videosList;
    }

  }
  return new youtubeService();
}]);