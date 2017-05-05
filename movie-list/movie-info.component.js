angular.module('movieInfo')
  .component('movieInfo', {
    templateUrl: 'movie-list/movie-info.template.html',
    controllerAs: 'model',

    controller: ['$http', '$routeParams', 'movieServices', '$sce',
      function MovieDetailController($http, $routeParams, movieServices, $sce) {
        model = this;
		model.info = [];
		model.similarList = [];
		model.trailar = [];

		var key = '';
		
		var trailerStart = "https://www.youtube.com/embed/";
		var movieID = $routeParams.movieID;
		
		var getDetails = function(){
			movieServices.getMovieDetails(movieID)
            .then(function mySucces(response) {
              model.movieDetails = response.data;
			  
				if(model.movieDetails.videos.results.length >0){
					key = model.movieDetails.videos.results[0].key;
					model.trailar = $sce.trustAsResourceUrl(trailerStart + key);
				}
            }, function myError(response) {
              model.movieDetails = response.statusText;
            });
			
		}
		getDetails();
      }
    ]
  });