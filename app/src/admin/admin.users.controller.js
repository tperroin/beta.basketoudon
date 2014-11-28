angular
    .module('app')
    .controller('admin.users.controller', function ($scope, ApiService, Restangular) {

        var api = ApiService;

        var users = Restangular.all(api.getRoute('get_users'));

        users.getList().then(function (result) {
            $scope.users = Restangular.stripRestangular(result);
        });
    });