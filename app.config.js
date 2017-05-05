'use strict';

angular.module('movieApp', [
  'ngRoute',
  'movieList',
  'movieInfo'

]);


angular.module('movieApp')
  .config(['$locationProvider', '$routeProvider', // 
    function config($locationProvider, $routeProvider) { // 
      $locationProvider.hashPrefix('!');

      $routeProvider
	  .when('/movies', {
        template: '<movie-list></movie-list>'
      })
	  .when('/movies/:movieID', {
        template: '<movie-info></movie-info>'
      })
	  .when('/movieinfo', {
        template: '<movie-info></movie-info>'
	  })
	  .otherwise({redirectTo: '/movies'});
    }
  ]);