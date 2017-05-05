'use strict';

var model = angular.module('tvList')
  .component('tvList', {
    templateUrl: 'tv-list/tv-list.template.html',
    controllerAs: 'model',

    controller: ['$http', '$scope', 'movieServices',
      function MovieListController($http, $scope, movieServices) {
        model = this;
        model.orderProp = 'first_air_date';
        model.language = 'en-US';
        model.list = [];
				
		movieServices.setLanguage(model.language);

        var getMovieList = function() {
          movieServices.getPopularTvShows(model.language)
            .then(function mySucces(response) {
              model.list = response.data.results;

            }, function myError(response) {
              model.list = response.statusText;
            });
        }
		
        $scope.changeLanguage = function() {
			movieServices.setLanguage(model.language);
			getMovieList();
        };
		
		getMovieList();
      }
    ]
  });