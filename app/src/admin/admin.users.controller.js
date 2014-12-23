angular
    .module('app')
    .controller('admin.users.controller', function ($scope, ApiService, Restangular) {

        var api = ApiService;

        var users = Restangular.all(api.getRoute('get_users'));

        users.getList().then(function (result) {
            $scope.users = Restangular.stripRestangular(result);
        });

        $scope.grantUser = function (user) {
            console.log(user);
            $scope.show_modal = true;
        };


        $scope.close_modal = function(){
            $scope.show_modal = false;
        }
    });