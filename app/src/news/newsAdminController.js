angular.module('app').controller('newsAdminController', function($scope, Restangular, NewsModel, ApiService) {

    //Une news
    var news = NewsModel;

    //Liste des news
    $scope.newsList = [];

    var api = ApiService;

    var all = Restangular.all(api.getRoute('get_news'));

    all.getList().then(function (result) {
        $scope.newsList = Restangular.stripRestangular(result);
    });

});