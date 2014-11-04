angular
    .module('app',
    [
        'restangular',
        'ui.router',
        'ngFx',
        'http-auth-interceptor'
    ]);

angular
    .module('app')
    .config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {

        RestangularProvider.setBaseUrl('http://beta.basketoudon.local/server/web/app_dev.php'); //wOOt, ugly ...but that's a demo ;)
        RestangularProvider.setRequestSuffix('.json');

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/partials/home.html",
                controller: 'homeController'
            })
            .state('news', {
                url: "/news",
                templateUrl: "src/news/partials/news.html",
                controller: 'newsController'
            })
            .state('admin', {
                url: "/admin",
                templateUrl: "src/admin/partials/admin.html"
            });

    });
