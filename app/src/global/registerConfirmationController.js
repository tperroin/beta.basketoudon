/**
 * Created by Thibault on 27/11/2014.
 */
angular
    .module('app')
    .controller('registerConfirmationController', function ($rootScope, $scope, Restangular, ApiService, $location, $stateParams) {

        Restangular
            .all(ApiService.getRoute('post_user_confirm'))
            .post({"token": $stateParams.token})
            .then(function (result) {
            }, function (result) {
                $scope.message = result.data.message;
            });

    });