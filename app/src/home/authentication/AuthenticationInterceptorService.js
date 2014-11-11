angular.module('app').
    factory('AuthenticationInterceptor', function ($window, $q, $injector, $rootScope) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;


                    var UserService = $injector.get("UserService");

                    if($window.sessionStorage.user) {
                        $rootScope.connectedUser = UserService.User(JSON.parse($window.sessionStorage.user));
                        $rootScope.connectedUser.connected = true;

                    }
                }
                return config || $q.when(config);
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    // handle the case where the user is not authenticated
                }
                return $q.reject(rejection);
            }
        };
    });