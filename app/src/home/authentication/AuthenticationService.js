/**
 * Created by Thibault on 02/11/2014.
 */

angular.module('app').
    factory('AuthenticationService', function ($rootScope, $http, authService, $httpBackend, ApiService, Restangular, $window, UserService) {
        return {
            login: function (credentials) {
                $http
                    .post("http://beta.basketoudon.local/server/web/app_dev.php/api/login_check", credentials, {ignoreAuthModule: true})
                    .success(function (data, status, headers, config) {
                        $window.sessionStorage.token = data.token;
                        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;

                        Restangular.all(ApiService.getRoute('get_user'), {username: credentials.username}).getList()
                            .then(function (result) {
                                var user = Restangular.stripRestangular(result);
                                $rootScope.connectedUser = UserService.User(user[0]);
                                $rootScope.connectedUser.connected = true

                                var userToStore = {
                                    username: user[0].username,
                                    email: user[0].email,
                                    roles: user[0].roles
                                }

                                $window.sessionStorage.user = JSON.stringify(userToStore);
                                $rootScope.$broadcast('event:auth-login-complete');
                            });
                    })
                    .error(function (data, status, headers, config) {
                        $rootScope.$broadcast('event:auth-login-failed', status);
                    });
            },
            logout: function (user) {
                delete $http.defaults.headers.common.Authorization;
                delete $window.sessionStorage.user;
                delete $window.sessionStorage.token;
                $rootScope.$broadcast('event:auth-logout-complete');
            }
        };
    })
