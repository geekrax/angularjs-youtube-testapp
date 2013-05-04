'use strict';

/* Directives */


angular.module('pocketYoutube.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
