/**
 * Created by Thibault on 02/11/2014.
 */

angular.module('app').
    factory('AuthenticationService', function ($rootScope, $http, authService, $httpBackend, ApiService, Restangular) {
        return {
            login: function (credentials) {
                $http
                    .post("http://beta.basketoudon.local/server/web/app_dev.php/api/login_check", credentials, {ignoreAuthModule: true})
                    .success(function (data, status, headers, config) {
                        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;

                        Restangular.all(ApiService.getRoute('get_user'), {username: credentials.username}).getList()
                            .then(function (result) {
                                var user = Restangular.stripRestangular(result);
                                user[0].connected = true;
                                $rootScope.connectedUser = user[0];
                                $rootScope.$broadcast('event:auth-login-complete');
                            });
                    })
                    .error(function (data, status, headers, config) {
                        $rootScope.$broadcast('event:auth-login-failed', status);
                    });
            },
            logout: function (user) {
                delete $http.defaults.headers.common.Authorization;
                $rootScope.connectedUser = [];
                $rootScope.$broadcast('event:auth-logout-complete');
            }
        };
    })
