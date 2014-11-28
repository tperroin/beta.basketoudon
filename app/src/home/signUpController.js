/**
 * Created by Thibault on 16/11/2014.
 */
angular
    .module('app')
    .controller('signUpController', function ($rootScope, $scope, Restangular, ApiService, AuthenticationService, $location, toaster, $timeout) {

        $scope.licencies = [];

        var api = ApiService;

        var all = Restangular.all(api.getRoute('get_licencies'));

        all.getList().then(function (result) {
            $scope.licencies = Restangular.stripRestangular(result);
        });

        $scope.name = '';
        $scope.licencieInfos = {
            username: "",
            firstname: "",
            lastname: "",
            mail: "",
            password: ""
        };

        $scope.loadLicencieData = function (name) {
            var selectedLicencie = Restangular.one(api.getRoute('get_licencie'), name).get();
            selectedLicencie.then(function (result) {
                $scope.licencieInfos.username = Restangular.stripRestangular(result)[0].username;
                $scope.licencieInfos.firstname = Restangular.stripRestangular(result)[0].firstname;
                $scope.licencieInfos.lastname = Restangular.stripRestangular(result)[0].lastname;
            });
        };

        $scope.register = function (licencieInfos) {
            var users = Restangular.all(api.getRoute('get_users'));
            users.post(licencieInfos);
            toaster.pop('success', "Compte créé !", "Vérifie tes emails pour valider ton compte.");
            $timeout(function() {
                $location.path("/");
            }, 5000);
        };
    });