angular.module('tvDetails')
  .component('tvDetails', {
    templateUrl: 'tv-list/tv-details.template.html',
    controllerAs: 'model',

    controller: ['$http', '$routeParams', 'movieServices',
      function MovieDetailController($http, $routeParams, movieServices) {
        model = this;
		model.tvDetails = [];
		model.similarList = [];
		
		var tvID = $routeParams.tvID;
		
		
		function getDetails () {
          movieServices.getTVDetails(tvID)
            .then(function mySucces(response) {
              model.tvDetails = response.data;

            }, function myError(response) {
              model.tvDetails = response.statusText;
            });
        }
		getDetails();
      }
    ]
  });