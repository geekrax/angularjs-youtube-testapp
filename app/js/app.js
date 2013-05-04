'use strict';


// Declare app level module which depends on filters, and services
angular.module('pocketYoutube', ['pocketYoutube.controllers', 'pocketYoutube.filters', 'pocketYoutube.services', 'pocketYoutube.directives'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    });
    // $routeProvider.otherwise({redirectTo: '/'});
}]);
