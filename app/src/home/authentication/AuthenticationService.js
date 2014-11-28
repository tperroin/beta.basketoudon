/**
 * Created by Thibault on 02/11/2014.
 */

angular.module('app').
    factory('AuthenticationService', function ($rootScope, $http, authService, $httpBackend, ApiService, Restangular, $window, UserService) {
        return {
            login: function (credentials) {
                var origin = window.location.origin;
                $http
                    .post(origin + "/beta.basketoudon/app/server/web/app_dev.php/api/login_check", credentials, {ignoreAuthModule: true})
                    .success(function (data, status, headers, config) {
                        $window.sessionStorage.token = data.token;
                        $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;

                        Restangular.all(ApiService.getRoute('get_user')).get(credentials.username)
                            .then(function (result) {
                                var user = Restangular.stripRestangular(result);
                                $rootScope.connectedUser = UserService.User(user);
                                $rootScope.connectedUser.connected = true

                                var userToStore = {
                                    username: user.username,
                                    email: user.email,
                                    roles: user.roles
                                }

                                $window.sessionStorage.user = JSON.stringify(userToStore);
                                $rootScope.$broadcast('event:auth-login-complete');
                            });
                    })
                    .error(function (data, status, headers, config) {
                        console.log(data);
                        $rootScope.$broadcast('event:auth-login-failed', status);
                    });
            },
            logout: function (user) {
                delete $http.defaults.headers.common.Authorization;
                delete $window.sessionStorage.user;
                delete $window.sessionStorage.token;
                delete $rootScope.connectedUser;
                $rootScope.$broadcast('event:auth-logout-complete');
            }
        };
    })
