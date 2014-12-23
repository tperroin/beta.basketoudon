/**
 * Created by Thibault on 28/11/2014.
 */
angular
    .module('app')
    .controller('event.controller', function ($rootScope, $scope, Restangular, ApiService, $location, $stateParams) {

        Restangular
            .all(ApiService.getRoute('get_events'))
            .getList()
            .then(function (result) {
                $scope.events = Restangular.stripRestangular(result);
            }, function (result) {
                $scope.message = result.data.message;
            });

    });