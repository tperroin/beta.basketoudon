angular
    .module('app')
    .controller('admin.news.controller', function ($scope, ApiService, Restangular) {

        var api = ApiService;

        var all = Restangular.all(api.getRoute('get_news'));

        all.getList().then(function (result) {
            $scope.newsList = Restangular.stripRestangular(result);
        });

        $scope.options = {
            language: 'fr',
            allowedContent: true,
            entities: false
        };
    });