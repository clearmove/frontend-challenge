var app = angular.module('clearmove', ['services.city', 'restangular', 'ui.bootstrap']);

app.config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000/api/v1');
    RestangularProvider.setRequestSuffix('.json');
}]);

angular.module('services.city', [])
    .service('City', ['Restangular', function(Restangular) {

      function getCities() {
      }

      function compare() {
      }

    }]);
