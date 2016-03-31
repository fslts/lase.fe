angular.module('lase.common.serverapi', [])

.factory('serverapi', ['$http', function ($http) {

  var service = {};

  service.serverBaseUrl = 'http://lase.ynet.sk:5000/api';

  service.sendSearchRequest = function(data) {
      return $http.get(service.serverBaseUrl + '/search', {params: data});
  };


  return service;
}]);
