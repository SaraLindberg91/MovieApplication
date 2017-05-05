'use strict';

var model = angular.module('searchList')
  .component('searchList', {
    templateUrl: 'search-list/search-list.template.html',
    controllerAs: 'model',

    controller: ['$http', '$scope', 'movieServices',
      function SearchListController($http, $scope, movieServices) {
        model = this;
        model.orderProp = 'first_air_date';
        model.language = 'en-US';
        model.list = [];
		model.query = '';

		var input = '';
		
		 $scope.apiSearch = function() {
			 input = model.query;
			if(!input)
				return;
			else
				getSearchList();
		 }
		
		
				
		movieServices.setLanguage(model.language);

        var getSearchList = function() {
          movieServices.getSearchList(input)
            .then(function mySucces(response) {
              model.list = response.data.results;

            }, function myError(response) {
              model.list = response.statusText;
            });
        }
		
        $scope.changeLanguage = function() {
			movieServices.setLanguage(model.language);
			getSearchList();
        };
		
		//getSearchList();
      }
    ]
  });