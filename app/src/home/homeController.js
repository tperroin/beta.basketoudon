angular
    .module('app')
    .controller('homeController', function ($rootScope, $scope, Restangular, ApiService, AuthenticationService, $location) {

        $scope.credentials = {
            username: 'user',
            password: 'password'
        };

        if ($rootScope.connectedUser) {
            $scope.user = $rootScope.connectedUser;
        }


        var api = ApiService;

        var news = Restangular.all(api.getRoute('get_active_news'));

        news.getList().then(function (result) {
            $scope.newsList = Restangular.stripRestangular(result);
        });

        $scope.$on('event:auth-login-failed', function () {
            $scope.errorMessage = 'Bad credentials';
        });

        $scope.$on('event:auth-login-complete', function () {
            $scope.user = $rootScope.connectedUser;
            $location.path("/");
        })

        $scope.$on('event:auth-logout-complete', function () {
            $scope.user = [];
            $location.path("/");
        })

        $scope.login = function (credentials) {
            AuthenticationService.login(credentials);
        };

        $scope.logout = function (user) {
            AuthenticationService.logout(user);
        };


    });