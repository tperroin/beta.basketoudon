angular
    .module('app')
    .controller('homeController', function ($rootScope, $scope, Restangular, ApiService, AuthenticationService) {

        $scope.credentials = {
            username: 'user',
            password: 'password'
        };

        $scope.$on('event:auth-login-failed', function () {
            $scope.errorMessage = 'Bad credentials';
        });

        $scope.login = function (credentials) {
            AuthenticationService.login(credentials);
        };

        $scope.logout = function (user) {
            AuthenticationService.logout(user);
        };

    });