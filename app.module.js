'use strict';

var movieApp = angular.module('movieApp', [
	'ngRoute',
	'movieService',
	'movieList',
	'movieInfo',
	'tvList',
	'tvDetails',
	'searchList'
]);


  movieApp.config(function ($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
	  .when('/movies', {
        template: '<movie-list></movie-list>',
		activetab: 'movies'
      })
	  .when('/movies/:movieID', {
        template: '<movie-info></movie-info>',
		activetab: 'movies'
      })
	  .when('/tv', {
        template: '<tv-list></tv-list>',
		activetab: 'tv'
      })
	  .when('/tv/:tvID', {
        template: '<tv-details></tv-details>',
		activetab: 'tv'
      })
	   .when('/search', {
        template: '<search-list></search-list>',
		activetab: 'search'
      })
	  .otherwise({redirectTo: '/movies'
	  });
    
   }).run(function ($rootScope, $route) {
	  
    $rootScope.$route = $route;
	});