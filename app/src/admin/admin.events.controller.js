/**
 * Created by Thibault on 28/11/2014.
 */
angular
    .module('app')
    .controller('admin.events.controller', function ($scope, ApiService, Restangular) {

        var api = ApiService;

        var events = Restangular.all(api.getRoute('get_events'));

        events.getList().then(function (result) {
            $scope.events = Restangular.stripRestangular(result);
        });
    });