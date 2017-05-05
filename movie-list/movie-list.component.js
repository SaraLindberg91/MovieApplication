'use strict';

var model = angular.module('movieList')
  .component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controllerAs: 'model',

    controller: ['$http', '$scope', 'movieServices',
      function MovieListController($http, $scope, movieServices) {
        model = this;
        model.orderProp = 'release_date';
        model.list = [];
		model.movieGenres = [];
			
		model.language = movieServices.getLanguage();
			if(model.language =='')
				model.language = 'en-US';
		
		movieServices.setLanguage(model.language);

        function getMovieList() {
          movieServices.getMoviesPlaying(model.language)
            .then(function mySucces(response) {
              model.list = response.data.results;

            }, function myError(response) {
              model.list = response.statusText;
            });
        }
		
		function getMovieGenres(){
			movieServices.getMovieGenres()
            .then(function mySucces(response) {
              model.movieGenres = response.data.genres;

            }, function myError(response) {
              model.movieGenres = response.statusText;
            });
		}
		
        $scope.changeLanguage = function() {
			movieServices.setLanguage(model.language);
			getMovieList();
			getMovieGenres();
        };
		
		getMovieList();
		getMovieGenres();
		
      }
    ]
  });