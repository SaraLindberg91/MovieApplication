'use strict';

var app = angular.module('movieService', []);

app.factory('movieServices', function($http) {

  var urlBase = 'https://api.themoviedb.org/3/';
  var api_key = '0d3781e3bc078b8064e75ecad68a2fa7';
  var language = ''

  function setLanguage(lan) {
    language = lan;
  }

  function getLanguage() {
    return language;
  }

  return {

	getLanguage: getLanguage,
    setLanguage: setLanguage,

    getMoviesPlaying: function(lan) {
      return $http.get(urlBase + 'movie/' + 'now_playing?api_key=' + api_key + '&language=' + lan + '&page=1');
    },
	
	getMovieGenres: function(){
		var lan = getLanguage();
		return $http.get(urlBase + 'genre/movie/list?api_key=' + api_key + '&language=' + lan);
	},
	getMovieDetails: function(ID){
		var lan = getLanguage();
		return $http.get(urlBase + 'movie/' + ID + '?api_key=' + api_key + '&language=' + lan +'&append_to_response=videos,similar,credits');
	},

    getPopularTvShows: function(lan) {
      return $http.get(urlBase + 'tv/' + 'popular?api_key=' + api_key + '&language=' + lan + '&page=1');
    },

    getTVDetails: function(ID) {
      var lan = getLanguage();
      return $http.get(urlBase + 'tv/' + ID + '?api_key=' + api_key + '&language=' + lan +'&append_to_response=similar');
    },

    getSearchList: function(input) {
      var lan = getLanguage();
      return $http.get(urlBase + 'search/multi?api_key=' + api_key + '&language=' + lan + '&query=' + input + '&page=1&include_adult=false');
    }
  }

});