angular.module('app').controller('newsController', function($scope, Restangular, NewsModel, ApiService) {

    //Une news
    var news = NewsModel;

    //Liste des news
    var newsList = [];

    var api = ApiService;

    var all = Restangular.all(api.getRoute('get_news'));

    all.getList().then(function (result) {
        Restangular.stripRestangular(result);
    });

    console.log('test');

});